//----------------- Styling Zone --------------------//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

//-----------------Libraries Zone -------------------//
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

//----------------- Components Zone -----------------//
import HomePage from './components/frontOffice/HomePage';
import UserZone from './components/backOffice/user/UserZone';
import UserZoneCopy from './components/backOffice/user/UserZoneCopy';
import UserUpdate from './components/backOffice/user/UpdateUser';
import Testing from './components/backOffice/user/Testing';






function App() {
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
        <Route path="/user" element={<UserZone />} />
        <Route path="/userZone" element={<UserZoneCopy />} />
        <Route path="/update" element={<UserUpdate />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
      <a style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>

    </div >
  );
}

export default App;
