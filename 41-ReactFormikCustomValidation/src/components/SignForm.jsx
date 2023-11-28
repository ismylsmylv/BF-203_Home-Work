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
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
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
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
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
                            </div>
                            <div className="input inpTexts">
                                <label htmlFor="fname">Confirm password</label>
                                <input type="password" name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} />
                            </div>
                        </div>
                        <button className="btnLeft" type="submit" disabled={isSubmitting}>Create account</button>
                    </form>
                    // <Link to="/SignUp">Create account</Link>
                )}
            </Formik>
            <div className="form">



            </div>
            <div className="btns">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignBtns />}>
                            <Route path="/SignUp" element={<SignUp />} />
                            <Route path="/SignUpGoogle" element={<SignUpGoogle />} />
                            {/* </Route> */}
                        </Route>
                    </Routes>


                    <button className="btnRight"><Link to="/SignUpGoogle"><img src={google} alt="" /> Sign-in with google</Link></button>


                </BrowserRouter>


                <Outlet />
            </div>
        </>
    )
}

export default SignForm