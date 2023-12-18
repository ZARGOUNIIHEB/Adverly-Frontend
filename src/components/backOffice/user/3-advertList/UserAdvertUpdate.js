import Slider from "react-slick";
import "./userAdvertUpdate.css";

import AddAdvert from "./addAdvert/AddAdvert";
import { postAdverts } from '../../../../api/AdvertsApi';

import { useState, useEffect, useRef } from "react";

const UserAdvertUpdate = ({ clickCard, user, hide, adverts, setAdverts }) => {

    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        // @ts-ignore
        if (clickCard && clickCard.imageAdvert && clickCard.imageAdvert.length > 0) {
            // @ts-ignore
            setImageArray(clickCard.imageAdvert);
        }
    }, [clickCard]);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleAdd = async (values) => {
        await postAdverts(values);
        console.log("values:", [...adverts, values]);
        setAdverts([...adverts, values]);
    }

    return (
        <>
            {hide ?
                (<section className="informationDisplay">
                    <div style={{ justifyContent: "space-between" }} className="flex">
                        <section className="displayAdvetUser">
                            <div className="displayTopUser" style={{ margin: "30px", width: "700px" }}>
                                <Slider {...settings}
                                    // @ts-ignore
                                    style={{ width: "20rem" }}>
                                    {imageArray.map((el) =>
                                        <div key={el._id} >
                                            <img style={{ width: "20rem", height: "10rem", objectFit: "cover" }}
                                                src={el.path}></img>
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
                        </section>
                    </div >
                </section >)
                :
                (
                    <AddAdvert user={user} handleAdd={handleAdd} />
                )}
        </>
    );
}
export default UserAdvertUpdate;