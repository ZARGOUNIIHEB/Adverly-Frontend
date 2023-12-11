import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchaccount } from "../../../api/UsersApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/UserSlice";


import HomePage from "../../frontOffice/HomePage";
import HeaderUser from "./1-headerUser/HeaderUser";


import Hero from '../../frontOffice/2-hero/Hero';
import Main from '../../frontOffice/3-main/Main';
import LatestAdverts from '../../frontOffice/4-contact/RecentlyAdded';
import Footer from '../../frontOffice/5-footer/Footer';

const UserZone = () => {
    const Adverts = useSelector(state => state.advertElement);
    console.log("This is the adverts List from user Zone :", Adverts);
    // @ts-ignore
    const user = useSelector(state => state.userElement);
    const dispatch = useDispatch();
    console.log("This is the user from user zone :", user);

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
                    <HeaderUser user={user} />
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
export default UserZone;