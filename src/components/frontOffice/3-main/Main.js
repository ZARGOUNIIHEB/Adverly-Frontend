import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import './main.css';
import myProjects from './MyProjects';

// Partie Redux
import { useSelector, useDispatch } from 'react-redux';
import { setAdvert } from '../../../redux/AdvertSlice';
// Partie Backend
import { fetchAllAdverts } from '../../../api/AdvertsApi';




const Main = () => {

    // Partie redux
    const Adverts = useSelector(state => state.advertElement);
    const dispatch = useDispatch();
    const [currentActive, setCurrentActive] = useState("all");
    const [arr, setArr] = useState(Adverts);

    //Partie getting data from DataBase
    const getAllAdverts = async () => {
        const data = await fetchAllAdverts();
        // console.log('Data from dataBase', data.adverts);
        dispatch(setAdvert(data.adverts));
    }
    // Render Data of DataBase
    useEffect(() => {
        getAllAdverts();
    }, []);

    // Update arr when Adverts changes
    useEffect(() => {
        setArr(Adverts);
    }, [Adverts]);


    const filterArray = (cat) => {
        const newArray = Adverts.filter((element) => {
            return element.category === cat;
        })
        setArr(newArray);
    }

    return (
        <main className="flex">
            <section className="flex left-section">
                <button onClick={() => { setCurrentActive("all"); setArr(Adverts); }} className={currentActive === "all" ? "active" : null}>all</button>
                <button onClick={() => { setCurrentActive("clothes"); filterArray("clothes"); }} className={currentActive === "clothes" ? "active" : null}>clothes</button>
                <button onClick={() => { setCurrentActive("vacation"); filterArray("vacation"); }} className={currentActive === "vacation" ? "active" : null}>vacation</button>
                <button onClick={() => { setCurrentActive("homemade tips"); filterArray("homemade tips"); }} className={currentActive === "homemade tips" ? "active" : null}>homemade tips</button>
                <button onClick={() => { setCurrentActive("jobs"); filterArray("jobs"); }} className={currentActive === "jobs" ? "active" : null}>jobs</button>
                <button onClick={() => { setCurrentActive("real estate"); filterArray("real estate"); }} className={currentActive === "real estate" ? "active" : null}>real estate</button>
                <button onClick={() => { setCurrentActive("cars"); filterArray("cars"); }} className={currentActive === "cars" ? "active" : null}>cars</button>
                <button onClick={() => { setCurrentActive("furnishings"); filterArray("furnishings"); }} className={currentActive === "furnishings" ? "active" : null}>furnishings</button>
                <button onClick={() => { setCurrentActive("home appliance"); filterArray("home appliance"); }} className={currentActive === "home appliance" ? "active" : null}>home appliance</button>
                <button onClick={() => { setCurrentActive("decoration"); filterArray("decoration"); }} className={currentActive === "decoration" ? "active" : null}>decoration</button>
                <button onClick={() => { setCurrentActive("computers"); filterArray("computers"); }} className={currentActive === "computers" ? "active" : null}>computers</button>
                <button onClick={() => { setCurrentActive("books"); filterArray("books"); }} className={currentActive === "books" ? "active" : null}>books</button>
            </section>
            <section className="flex right-section">
                <AnimatePresence>
                    {arr.map((item) => {
                        return (
                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ dumping: 8, type: "spring", stiffness: 50 }}

                                key={item._id}
                                className="  card">
                                <img width={266} src={item.imageAdvert} alt="" />

                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.title}</h1>
                                    <p className="sub-title">
                                        Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                                        tempore dolor in, accusantium laudantium accusamus.
                                    </p>

                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"></div>
                                            {/* <div className="icon-github"></div> */}
                                        </div>

                                        <a className="link flex" href="">
                                            more
                                            <span
                                                style={{ alignSelf: "end" }}
                                                className="icon-arrow-right"
                                            ></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </section>
        </main>
    );
}
export default Main;