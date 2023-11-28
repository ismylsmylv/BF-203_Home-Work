import { Link, Outlet } from "react-router-dom";
import google from "../assets/img/iconfinder_Google_1298745 1.png"
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from '../pages/SignUp'
import SignUpGoogle from '../pages/SignUpGoogle'
import SignBtns from './SignBtns'
import '../style/signup.css'
import { Formik } from 'formik';
function SignForm() {
    return (
        <>
            <Formik
                initialValues={{ Fname: '', Lname: '', email: '', password: '', tel: "" }}
                validate={values => {
                    const errors = {};
                    // email check
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    // name check
                    if (values.Fname.trim() == "") {
                        errors.Fname = "Name can not be empty"
                    }
                    else if (
                        !/^[a-zA-Z]+$/.test(values.Fname)
                    ) {
                        errors.Fname = 'Only alphabetical symbols';
                    }
                    else if (values.Fname.length < 4 || values.Fname.length > 10) {
                        errors.Fname = "Name should contain more than 3 and less than 10 characters"
                    }
                    // surname check
                    if (values.Lname.trim() == "") {
                        errors.Lname = "Name can not be empty"
                    }
                    else if (
                        !/^[a-zA-Z]+$/.test(values.Lname)
                    ) {
                        errors.Lname = 'Only alphabetical symbols';
                    }
                    else if (values.Lname.length < 4 || values.Lname.length > 10) {
                        errors.Lname = "Name should contain more than 3 and less than 10 characters"
                    }

                    // phone check
                    if (!values.tel) {
                        errors.tel = "Enter phone number";
                    } else if (!/^(050|051|055|070|077|010)\d{7}$/.test(values.tel)) {
                        errors.tel = "Invalid phone number";
                    }

                    // password check
                    if (!values.password) {
                        errors.password = "Password is required";
                    } else if (
                        !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/.test(values.password)
                    ) {
                        errors.password =
                            "Password must have at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 6 characters long";
                    }

                    // confirm password check
                    if (!values.confirmPassword) {
                        errors.confirmPassword = "Confirm Password is required";
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Passwords do not match";
                    }




                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="row">
                            <div className="input inpTexts">
                                <label htmlFor="fname">First name</label>
                                <input type="text"
                                    name="Fname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Fname}
                                />
                                {errors.Fname && touched.Fname && errors.Fname}
                            </div>
                            <div className="input inpTexts">
                                <label htmlFor="fname">Last name</label>
                                <input type="text"
                                    name="Lname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Lname} />
                                {errors.Lname && touched.Lname && errors.Lname}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input inpTexts">
                                <label htmlFor="fname">Email</label>
                                <input type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                            <div className="input inpTexts">
                                <label htmlFor="fname">Phone Number</label>
                                <input type="tel"
                                    name="tel"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.tel}
                                />
                                {errors.tel && touched.tel && errors.tel}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input inpTexts">
                                <label htmlFor="fname">Password</label>
                                <input type="password" name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                                {errors.password && touched.password && errors.password}

                            </div>
                            <div className="input inpTexts">
                                <label htmlFor="fname">Confirm password</label>
                                <input type="password" name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword} />
                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}

                            </div>
                        </div>
                        <div className="btns">
                            <button className="btnLeft" type="submit" disabled={isSubmitting}>Create account</button>
                            <button className="btnRight"><img src={google} alt="" /> Sign-in with google</button>
                        </div>
                    </form>
                    // <Link to="/SignUp">Create account</Link>
                    // <Link to="/SignUpGoogle"></Link>
                )}
            </Formik>

            <div className="btns">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignBtns />}>
                            <Route path="/SignUp" element={<SignUp />} />
                            <Route path="/SignUpGoogle" element={<SignUpGoogle />} />
                            {/* </Route> */}
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Outlet />
            </div>
        </>
    )
}

export default SignForm