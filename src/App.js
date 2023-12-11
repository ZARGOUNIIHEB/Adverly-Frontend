//----------------- Styling Zone --------------------//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

//-----------------Libraries Zone -------------------//
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdvert } from './redux/AdvertSlice';
import { fetchAllAdverts } from './api/AdvertsApi';

//----------------- Components Zone -----------------//
import HomePage from './components/frontOffice/HomePage';
import DisplayAdvert from './components/frontOffice/3-main/DisplayAdvert';
import UserZone from './components/backOffice/user/UserZone';
import UserUpdate from './components/backOffice/user/2-userUpdate/UpdateUser';
import AdvertForm from './components/backOffice/user/3-advertList/AdvertForm';


function App() {
  const Adverts = useSelector(state => state.advertElement);
  const dispatch = useDispatch();


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


  const [showScrollBTN, setScrollBTN] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollBTN(true);
      } else {
        setScrollBTN(false);
      }
    })
  }, [])

  return (
    <div id="up" className='container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/displayadvert/:id" element={<DisplayAdvert />} />
        <Route path="/user" element={<UserZone />} />
        <Route path="/profile" element={<UserUpdate />} />
        <Route path="/advert" element={<AdvertForm />} />
      </Routes>
      <a style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>

    </div >
  );
}

export default App;
