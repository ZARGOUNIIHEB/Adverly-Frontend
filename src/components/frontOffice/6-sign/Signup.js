import React, { useState } from "react";

// Material UI Imports
import {
    TextField, InputAdornment, FormControl, InputLabel, IconButton, Button, Input, Checkbox,
    Alert, Stack,
} from "@mui/material";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

// Validations

// Email Validation
const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Signup({ handleAdd }) {
    const [showPassword, setShowPassword] = React.useState(false);

    //Inputs
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // Inputs Errors
    const [firstNameError, setFirstNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Overall Form Validity
    const [formValid, setFormValid] = useState();
    const [success, setSuccess] = useState();

    // Handles Display and Hide Password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Label for Checkbox
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    // Validation for onBlur Username
    const handleUsername = () => {
        if (!firstName) {
            setFirstNameError(true);
            return;
        }

        setFirstNameError(false);
    };

    // Validation for onBlur Email
    const handleEmail = () => {
        console.log(isEmail(email));
        if (!isEmail(email)) {
            setEmailError(true);
            return;
        }

        setEmailError(false);
    };

    // Validation for onBlur Password
    const handlePassword = () => {
        if (
            !password ||
            // @ts-ignore
            password.length < 5 ||
            // @ts-ignore
            password.length > 20
        ) {
            setPasswordError(true);
            return;
        }

        setPasswordError(false);
    };

    //handle Submittion
    const handleSubmit = () => {
        setSuccess(null);
        //First of all Check for Errors

        // IF username error is true
        if (firstNameError || !firstName) {
            setFormValid(
                // @ts-ignore
                "Username is set btw 5 - 15 characters long. Please Re-Enter"
            );
            return;
        }

        // If Email error is true
        if (emailError || !email) {
            // @ts-ignore
            setFormValid("Email is Invalid. Please Re-Enter");
            return;
        }

        // If Password error is true
        if (passwordError || !password) {
            setFormValid(
                // @ts-ignore
                "Password is set btw 5 - 20 characters long. Please Re-Enter"
            );
            return;
        }
        setFormValid(null);

        // Proceed to use the information passed
        console.log("Username : " + firstName);
        console.log("Email : " + email);
        console.log("Password : " + password);

        //Show Successfull Submittion
        // @ts-ignore
        setSuccess("Form Submitted Successfully");

        handleAdd({ firstName, email, password });
    };

    return (
        <div>
            <div style={{ marginTop: "10px" }}>
                <TextField
                    error={firstNameError}
                    label="Username"
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: "100%", input: { color: "#fff" }, label: { color: "#fff" } }}
                    size="small"
                    value={firstName}
                    InputProps={{}}
                    onChange={(event) => {
                        // @ts-ignore
                        setFirstName(event.target.value);
                    }}
                    onBlur={handleUsername}
                />
            </div>

            <div style={{ marginTop: "5px" }}>
                <TextField
                    label="Email Address"
                    fullWidth
                    error={emailError}
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: "100%", input: { color: "#fff" }, label: { color: "#fff" } }}
                    value={email}
                    InputProps={{}}
                    size="small"
                    onBlur={handleEmail}
                    onChange={(event) => {
                        // @ts-ignore
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <div style={{ marginTop: "5px" }}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                    <InputLabel
                        error={passwordError}
                        htmlFor="standard-adornment-password"
                        sx={{ color: "#fff" }}
                    >
                        Password
                    </InputLabel>
                    <Input
                        error={passwordError}
                        onBlur={handlePassword}
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        // @ts-ignore
                        onChange={(e) => { setPassword(e.target.value); }}
                        value={password}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{ color: "#fff" }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

            <div style={{ marginTop: "10px" }}>
                <Button
                    variant="contained"
                    fullWidth
                    startIcon={<LoginIcon />}
                    onClick={handleSubmit}
                >
                    SIGNUP
                </Button>
            </div>

            {/* Show Form Error if any */}
            {formValid && (
                <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                    <Alert severity="error" sx={{ size: "small" }}>
                        {formValid}
                    </Alert>
                </Stack>
            )}

            {/* Show Success if no issues */}
            {success && (
                <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                    <Alert severity="success"
                        sx={{ size: "small" }}>
                        {success}
                    </Alert>
                </Stack>
            )}

            <div style={{ marginTop: "7px", fontSize: "10px", margin: "left", color: "#fff" }}>
                <a style={{ color: "#fff" }}>Forgot Password</a>
                <br />
                Do you have an account ?{" "}
                <small style={{ textDecoration: "underline", color: "blue" }}>
                    Sign Up
                </small>
            </div>
        </div>
    );
}