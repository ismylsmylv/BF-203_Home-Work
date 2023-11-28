import { Link, Outlet } from "react-router-dom";
import React from 'react'
import '../style/signup.css'
import phone from "../assets/img/imgfeatures-archive 6.png"
import logo from "../assets/img/img-new-logo-low-quality.png"
import google from "../assets/img/iconfinder_Google_1298745 1.png"
import playstore from "../assets/img/Google Play Badge.svg"
import appstore from "../assets/img/App Store Badge.svg"
import SignUp from '../pages/SignUp'
import SignUpGoogle from '../pages/SignUpGoogle'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignBtns from "./SignBtns";
import SignForm from "./SignForm";
function Signup() {
    return (
        <>


            <div className="content">
                <div className="left">
                    <div className="headText">Social media shared today, tomorrow or by location</div>
                    <img src={phone} alt="" />
                    <div className="navigations">
                        <div className="nav"></div>
                        <div className="nav midCircle"></div>
                        <div className="nav"></div>
                    </div>
                </div>



                <div className="right">
                    <div className="heading">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="logoText">Capzul</div>
                    </div>
                    <div className="formHead">Create account</div>
                    <div className="formSub">For business, band or celebrity.</div>
                    <div className="form">
                        <SignForm />
                    </div>

                    <div className="options">
                        <div className="optL">
                            <div className="optInput">
                                <input type="checkbox" name="" id="" />
                                <span>Remember me</span>
                            </div>
                            <div className="optInput">
                                <input type="checkbox" name="" id="" />
                                <span>I agree to all the <a href="#">Terms</a> and <a href="#">Privacy policy</a> </span>
                            </div>
                        </div>
                        <div className="optR"><a href="#">Forgot password?</a></div>
                    </div>

                </div>
                <div className="opt">

                    Don’t have an account? <a href="#"> Log In</a>

                </div>
                <div className="apps">
                    <div className="imgL"><img src={playstore} alt="" /></div>
                    <div className="imgR"><img src={appstore} alt="" /></div>
                </div>
            </div>


        </>
    )
}

export default Signup