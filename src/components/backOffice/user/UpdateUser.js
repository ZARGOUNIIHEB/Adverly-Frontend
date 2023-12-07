




import { updateUser } from "../../../api/UsersApi";
import { fetchaccount } from "../../../api/UsersApi";
import { setUser } from "../../../redux/UserSlice";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

import HomePage from "../../frontOffice/HomePage";
import Header from '../../frontOffice/1-header/Header';
import "./updateUser.css";

const UpdateUser = () => {
    // @ts-ignore
    const user = useSelector((state) => state.userElement);
    const dispatch = useDispatch();



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [imageUser, setImageUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const getAuth = async () => {
        const data = await fetchaccount();
        dispatch(setUser(data));
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setRole(data.role);
        setAge(data.age);
        setPhone(data.phone);
        setImageUser(data.imageUser);
        setEmail(data.email);
        setPassword(data.password);
    }
    useEffect(() => {
        getAuth();
    }, []);

    const submitImageUser = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageUser", imageUser);
        const result = await axios.post(
            "http://localhost:5004/upload-image",
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        console.log(result.data);
        setImageUser(`./images/${result.data}`);
    };

    const handleAdd = async (id, value) => {
        console.log("add values:", value);
        await updateUser(id, value);
    }



    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImageUser(e.target.files[0]);
    };

    //console.log("This is the image from Update user :", user.imageUser);

    const token = localStorage.getItem("token");
    return (
        <>
            {token ?
                (<div>
                    <Header />
                    <section className="contact-us">
                        <h1 className="title">
                            <span className="icon-envelope"></span>
                            Profile
                        </h1>
                        <p className="sub-title">
                            This is all the informations about your profil.
                        </p>
                        <div style={{ justifyContent: "space-between" }} className="flex">
                            <form className="border">
                                <div className="flex">
                                    <label htmlFor="text">Firstname:</label>
                                    <input required type="text"
                                        name=""
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                    />
                                </div>
                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Lastname:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Role:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="role"
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)} />
                                </div>
                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Age:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)} />
                                </div>
                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Phone:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                </div>


                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Image URL:</label>
                                    <input type="file" accept="image/*" onChange={onInputChange}></input>
                                    <button className="submit" onClick={submitImageUser}>Submit</button>
                                </div>


                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Email:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="flex" style={{ marginTop: "24px" }}>
                                    <label htmlFor="text">Password:</label>
                                    <input required
                                        type="text"
                                        name=""
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button className="submit" onClick={() => handleAdd(user._id, { firstName, lastName, age, phone, imageUser, email, password })}>Submit</button>
                            </form>

                        </div>
                    </section >

                </div >) : (<HomePage />)}
        </>);
}
export default UpdateUser;