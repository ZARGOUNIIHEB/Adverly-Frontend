import Header from "../../frontOffice/1-header/Header";
import HomePage from "../../frontOffice/HomePage";
import "./testing.css";


import { useState, useEffect } from "react";
import axios from "axios";

const Testing = () => {
    const [imageUser, setImageUser] = useState(null);
    const [allImage, setAllImage] = useState([]);

    useEffect(() => {
        // getImageUser();
    }, []);

    const submitImageUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageUser", imageUser);
        const result = await axios.post(
            "http://localhost:5004/upload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        console.log(result.data);
    };

    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImageUser(e.target.files[0]);
    };

    // const getImageUser = async () => {
    //     const result = await axios.get("http://localhost:5004/get-image");
    //     console.log(result);
    //     setAllImage(result.data.data);
    // };

    // const token = localStorage.getItem("token");
    return (
        <>
            <Header />
            <div>
                <form onSubmit={submitImageUser}>

                    <input type="file" accept="image/*" onChange={onInputChange}></input>
                    <button type="submit">Submit</button>
                </form>
                {/* {allImage == null
                    ? ""
                    : allImage.map((data) => {
                        return (
                            <img key={data._id}
                                src={require(`../../../../images/${data.imageUser}`)}
                                height={100}
                                width={100}
                            />
                        );
                    })} */}
            </div>



        </>);
}
export default Testing;