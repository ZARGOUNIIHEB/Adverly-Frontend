import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router';


import "./sign.css";

import { postUser, fetchaccount } from '../../../api/UsersApi';


import Login from "./Login";
import Signup from "./Signup";


// Material UI imports
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import Switch from "@mui/material/Switch";




const Sign = ({ setShowLoginForm }) => {


    const [checked, setChecked] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Navigate = useNavigate();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleAdd = async (value) => {
        console.log("add values:", value);
        await postUser(value);
    }

    const submitLogin = async (values) => {
        console.log(values);
        try {
            const res = await axios.post('http://localhost:5004/user/signin', values);
            console.log('reponse login', res.data.token);
            localStorage.setItem('token', res.data.token);
            Navigate("/user");

        } catch (err) {
            console.log(err);
        }


        // setLogged(1);

    }





    return (
        <Paper className="loginModal">
            <button className="icon-close" onClick={() => setShowLoginForm(false)} />
            <div
                // @ts-ignore
                align="center">
                {checked ? (
                    <Chip
                        icon={<LockIcon />}
                        label="Log In"
                        variant="outlined"
                        color="info"
                    />
                ) : (
                    <Chip
                        icon={<FaceIcon />}
                        label="Sign Up"
                        variant="outlined"
                        color="info"
                    />
                )}
                <br />

                <Switch
                    // icon={checked ? (<LockIcon />) : (<FaceIcon />)}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                />
            </div>

            {checked ? <Login submitLogin={submitLogin} /> : <Signup
                // @ts-ignore
                handleAdd={handleAdd} />}
        </Paper>
    );
}
export default Sign;