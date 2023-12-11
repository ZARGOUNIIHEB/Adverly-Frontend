//----------------- Styling Zone --------------------//
import "./userAdvertsDisplay.css";
import { AnimatePresence, motion } from "framer-motion";


//-----------------Libraries Zone -------------------//
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const UserAdvertsDisplay = ({ adverts, setClickCard }) => {
    const [refState, setRefState] = useState('');

    const myRefs = useRef([]);

    const handleButtonClick = (index) => {
        const newArray = adverts.find(item => item._id === myRefs.current[index].id);
        console.log(newArray);
        setClickCard(newArray);
    };


    return (
        <section className="userAdverts flex">
            <AnimatePresence>
                {adverts.map((item, index) => {
                    return (
                        <motion.article
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ dumping: 8, type: "spring", stiffness: 50 }}
                            key={item._id}
                            className="  card"
                            id={item._id}
                            ref={(el) => (myRefs.current[index] = el)}
                            onClick={() => handleButtonClick(index)}
                        >
                            <img width={177}
                                src={item.imageAdvert[0].path}
                                alt="" />
                            <div style={{ width: "177px" }} className="box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">
                                    Lorem ipsum dolor sit amet consectetur elit adipisicing.
                                </p>

                                <div className="flex icons">
                                    <div style={{ gap: "11px" }} className="flex">
                                        <div className="icon-link"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </AnimatePresence>
        </section >
    );
}
export default UserAdvertsDisplay;