import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import Slider from "react-slick";


import './recentlyAdded.css';

// Partie Redux
import { useSelector } from 'react-redux';

const RecentlyAdded = () => {
    const Adverts = useSelector(state => state.advertElement);
    const [arr, setArr] = useState(Adverts);

    useEffect(() => {
        setArr(Adverts);
    }, [Adverts]);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        speed: 2000
    };

    return (
        <div>
            <h2>Recently Added</h2>
            <Slider {...settings}>
                {arr.map((item) => {
                    return (
                        <div key={item._id} className="card-last-adverts" >
                            <div style={{
                                // width: "50px",
                                // backgroundImage: `url(${item.imageAdvert[0].path})` 
                            }}>
                                <img width={250} src={item.imageAdvert[0].path}></img>
                            </div>
                        </div>
                    );
                })}
            </Slider >
        </div >);
}
export default RecentlyAdded;