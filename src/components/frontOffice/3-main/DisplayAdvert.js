import Header from "../1-header/Header";
import Footer from "../5-footer/Footer";
import { getUniqueAdvert } from "../../../api/AdvertsApi";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import Slider from "react-slick";
import "./displayAdvert.css";

const DisplayAdvert = () => {


    const { id } = useParams();
    const [advert, setAdvert] = useState('');
    const [imageArray, setImageArray] = useState([]);

    const getAdvert = async (id) => {
        const data = await getUniqueAdvert(id);
        console.log('Data from dataBase', data.advert);
        setAdvert(data.advert);
    }

    useEffect(() => {
        getAdvert(id);
    }, []);

    useEffect(() => {
        // @ts-ignore
        if (advert && advert.imageAdvert && advert.imageAdvert.length > 0) {
            // @ts-ignore
            console.log("Advert Image Path:", advert.imageAdvert);
            // @ts-ignore
            setImageArray(advert.imageAdvert);
        }
    }, [advert]);

    const baseUrl = '\\';

    const settings = {
        customPaging: function (i) {
            return (
                <div style={{ display: "flex" }}>
                    <a>
                        <img style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }} src={baseUrl + imageArray[i].path} />
                    </a>
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (<>
        <Header />
        <div style={{ justifyContent: "space-between" }} className="flex">
            <section className="InformationAdvert" style={{ border: "1px solid green" }}>
                test test
            </section>
            <section className="dispalyAdvet">
                <div className="displayTop" style={{ margin: "30px", width: "700px" }}>
                    <h2>{advert.title}</h2>
                    <Slider {...settings}>
                        {imageArray.map((el) =>
                            <div key={el._id} >
                                <img style={{ width: "100%", height: "30rem" }} src={baseUrl + el.path}></img>
                            </div>)}
                    </Slider >
                </div >

            </section>
        </div >
        <div className='divider' />
        <Footer />
    </>);
}
export default DisplayAdvert;


{/* <p>{advert.title}</p>
            <p>{advert.type}</p>
            <p>{advert.price}</p>
            <p>{advert.city}</p>
            <p>{advert.delegation}</p>
            <p>{advert.category}</p>
            <p>{advert.subCategory}</p>
            <p>{advert.productCondition}</p>
            <p>{advert.userAdvert}</p> */}