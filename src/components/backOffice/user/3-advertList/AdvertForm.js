//-----------------Libraries Zone -------------------//
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//----------------- Components Zone -----------------//
import { fetchaccount } from "../../../../api/UsersApi";
import { setUser } from "../../../../redux/UserSlice";
import HeaderUser from '../1-headerUser/HeaderUser';
import Footer from '../../../frontOffice/5-footer/Footer';

const AdvertForm = () => {
    // @ts-ignore
    const user = useSelector((state) => state.userElement);
    const dispatch = useDispatch();

    const getAuth = async () => {
        const data = await fetchaccount();
        dispatch(setUser(data));
    }
    useEffect(() => {
        getAuth();
    }, []);
    return (
        <>
            <HeaderUser user={user} />
            <div style={{ width: "100%", height: "100rem" }}>

            </div>
            <Footer />
        </>
    );
}
export default AdvertForm;