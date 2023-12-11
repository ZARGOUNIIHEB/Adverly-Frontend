import Slider from "react-slick";
import "./userAdvertUpdate.css";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const UserAdvertUpdate = ({ clickCard }) => {

    const [imageArray, setImageArray] = useState([]);
    const [hide, setHide] = useState(true);

    console.log(clickCard);

    useEffect(() => {
        // @ts-ignore
        if (clickCard && clickCard.imageAdvert && clickCard.imageAdvert.length > 0) {
            // @ts-ignore
            console.log("Advert Image Path:", clickCard.imageAdvert);
            // @ts-ignore
            setImageArray(clickCard.imageAdvert);
        }
    }, [clickCard]);

    const baseUrl = '\\';
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    //////////////////Drag and Drop section Begin //////////////////
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const selectFiles = () => {
        fileInputRef.current.click();
    }

    const onFileSelect = (event) => {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages, {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
            console.log(images);
        }
    }

    const deleteImage = (index) => {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    }
    const onDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    const onDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    }

    const onDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages, {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
            console.log(images);
        }
    }
    const uploadImages = async () => {

        try {
            const formData = new FormData();
            images.forEach((image, index) => {
                formData.append(`image[${index}]`, image);
                console.log("Image:", image);
            });
            formData.forEach((value, key) => {
                console.log(`${key}: ${value[0].name}`);

            });

            // Send a POST request to the backend
            const response = await axios.post('http://localhost:5004/upload', formData);
            console.log("response :", response);
            console.log("Images uploaded successfully:", response.data);
        } catch (error) {
            console.error("Error uploading images:", error);
        }
    }

    /////////////////Drag and Drop section End ///////////////////


    return (
        <>{hide ?
            (<section className="informationDisplay">
                <div style={{ justifyContent: "space-between" }} className="flex">
                    <section className="displayAdvetUser">
                        <div className="displayTopUser" style={{ margin: "30px", width: "700px" }}>
                            <Slider {...settings} style={{ width: "20rem" }}>
                                {imageArray.map((el) =>
                                    <div key={el._id} >
                                        <img style={{ width: "20rem", height: "10rem", objectFit: "cover" }}
                                            src={baseUrl + el.path}></img>
                                    </div>)}
                            </Slider >
                        </div >
                    </section >
                    <section className="InformationAdvert">
                        <p>{clickCard.title}</p>
                        <p>{clickCard.category}</p>
                        <p>{clickCard.subCategory}</p>
                        <p>{clickCard.city}</p>
                        <p>{clickCard.price}</p>
                        <p>{clickCard.productCondition}</p>
                        <p>{clickCard.type}</p>
                        <button className="submit"
                            onClick={() => setHide(false)}>Update</button>
                    </section>
                </div >
            </section>)
            :
            (<section className="informationUpdate">
                <div style={{ justifyContent: "space-between" }} className="flex">
                    <section className="displayAdvetUser">

                        <div>
                            <div className="card-drag">
                                <div className="top">
                                    <p>Drag & Drop image uploading</p>
                                </div>
                                <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                                    {isDragging ? (
                                        <span className="select">
                                            Drop images here
                                        </span>
                                    ) : (
                                        <>
                                            Drag and Drop the image here or {""}
                                            <span className="select" role="button" onClick={selectFiles}>
                                                Browse
                                            </span>
                                        </>
                                    )}

                                    <input name="file" type="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect}></input>
                                </div>
                                <div className="container-drag">
                                    {images.map((images, index) => (
                                        <div className="image" key={index}>
                                            <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                            <img src={images.url} alt={images.name} />
                                        </div>
                                    ))}


                                </div>
                                <button type="button" onClick={uploadImages}>
                                    Upload
                                </button>

                            </div>
                        </div >











                    </section >
                    <section className="InformationAdvert">
                        <button className="submit"
                            onClick={() => setHide(true)}>Validate</button>
                    </section>
                </div>
            </section>)}
        </>
    );
}
export default UserAdvertUpdate;