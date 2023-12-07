import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchaccount } from "../../../api/UsersApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/UserSlice";


import HomePage from "../../frontOffice/HomePage";

import Header from '../../frontOffice/1-header/Header';
import Hero from '../../frontOffice/2-hero/Hero';
import Main from '../../frontOffice/3-main/Main';
import LatestAdverts from '../../frontOffice/4-contact/RecentlyAdded';
import Footer from '../../frontOffice/5-footer/Footer';


const UserZoneCopy = () => {

    // @ts-ignore
    const user = useSelector(state => state.userElement);
    const dispatch = useDispatch();


    const navigate = useNavigate();

    const getAuth = async () => {
        const data = await fetchaccount();
        dispatch(setUser(data));
    }

    useEffect(() => {
        getAuth();
    }, []);



    const token = localStorage.getItem("token");

    return (
        <>
            {token ?
                (<div>
                    <Header />
                    <Hero />
                    <div className='divider' />
                    < Main />
                    <div className='divider' />
                    <LatestAdverts />
                    <div className='divider' />
                    < Footer />
                </div>) : (<HomePage />)}
        </>
    );
}
export default UserZoneCopy;