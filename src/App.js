//----------------- Styling Zone --------------------//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './components/chat/index.css';
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
import SupportEngine from './components/chat/SupportEngine/index';
import SupportAdmin from './components/chat/SupportAdmin/index';
import UserZone from './components/backOffice/user/UserZone';
import Core from './components/backOffice/user/4-userCore/Core';
import UserUpdate from './components/backOffice/user/2-userUpdate/UpdateUser';
import AdvertForm from './components/backOffice/user/3-advertList/AdvertForm';
import Testing from './components/backOffice/user/Testing';

import AdminDashboard from './components/backOffice/adminDashboard/AdminDashboard';
import Dashboard from './components/backOffice/adminDashboard/parts/dashboard/Dashboard';
import Users from "./components/backOffice/adminDashboard/parts/users/Users";
import Contacts from "./components/backOffice/adminDashboard/parts/contacts/Contacts";
import AdvertsList from "./components/backOffice/adminDashboard/parts/adverts/Adverts";
import Form from "./components/backOffice/adminDashboard/parts/form/Form";
import Calendar from "./components/backOffice/adminDashboard/parts/calendar/Calendar";
import FAQ from "./components/backOffice/adminDashboard/parts/faq/Faq";
import Bar from "./components/backOffice/adminDashboard/parts/barChart/Bar";
import Pie from "./components/backOffice/adminDashboard/parts/pieChart/Pie";
import Line from "./components/backOffice/adminDashboard/parts/lineChart/Line";
import Geography from "./components/backOffice/adminDashboard/parts/geography/Geography";

function App() {
  // @ts-ignore
  const Adverts = useSelector(state => state.advertElement);
  const dispatch = useDispatch();


  //Partie getting data from DataBase
  const getAllAdverts = async () => {
    const data = await fetchAllAdverts();
    const filtredData = data.adverts.filter((element) => element.advertState === 'Approved');
    dispatch(setAdvert(filtredData));
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
        <Route path="/supportengine" element={<SupportEngine />} />
        <Route path="/support" element={<SupportAdmin />} />

        <Route path="/userzone" element={<UserZone />} >
          <Route index element={<Core />} />
          <Route path="/userzone/profile" element={<UserUpdate />} />
          <Route path="/userzone/advert" element={<AdvertForm />} />
          <Route path="/userzone/testing" element={<Testing />} />
        </Route>
        <Route path="/dashboardadmin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboardadmin/users" element={<Users />} />
          <Route path="/dashboardadmin/contacts" element={<Contacts />} />
          <Route path="/dashboardadmin/adverts" element={<AdvertsList />} />
          <Route path="/dashboardadmin/form" element={<Form />} />
          <Route path="/dashboardadmin/calendar" element={<Calendar />} />
          <Route path="/dashboardadmin/faq" element={<FAQ />} />
          <Route path="/dashboardadmin/bar" element={<Bar />} />
          <Route path="/dashboardadmin/pie" element={<Pie />} />
          <Route path="/dashboardadmin/line" element={<Line />} />
          <Route path="/dashboardadmin/geography" element={<Geography />} />
        </Route>


      </Routes>
      <a style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>

    </div >
  );
}

export default App;
