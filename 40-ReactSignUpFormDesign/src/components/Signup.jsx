import React from 'react'
import '../style/signup.css'
function Signup() {
    return (
        <>
            <div className="content">
                <div className="left">
                    <div className="headText">Social media shared today, tomorrow or by location</div>
                    <img src="../../assets/img/imgfeatures-archive 6.png" alt="" />
                    <div className="navigations">
                        <div className="nav"></div>
                        <div className="nav"></div>
                        <div className="nav"></div>
                    </div>
                </div>



                <div className="right">
                    <div className="heading">
                        <div className="logo"><img src="./assets/img/img-new-logo-low-quality.png" alt="" /></div>
                        <div className="logoText">Capzul</div>
                    </div>
                    <div className="formHead">Create account</div>
                    <div className="formSub">For business, band or celebrity.</div>
                    <div className="form">
                        <div className="row">
                            <div className="input">
                                <label htmlFor="fname">First name</label>
                                <input type="text" />
                            </div>
                            <div className="input">
                                <label htmlFor="fname">Last name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input">
                                <label htmlFor="fname">Email or phone number</label>
                                <input type="email" />
                            </div>
                            <div className="input">
                                <label htmlFor="fname">Date of birth (MM/DD/YY)</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input">
                                <label htmlFor="fname">Password</label>
                                <input type="password" />
                            </div>
                            <div className="input">
                                <label htmlFor="fname">Confirm password</label>
                                <input type="password" />
                            </div>
                        </div>
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
                    <div className="btns">
                        <button className="btnLeft">Create account</button>
                        <button className="btnRight">Sign-in with google</button>
                    </div>
                    <div className="opt">
                        Don’t have an account? <a href="#">Log In</a>
                    </div>
                    <div className="apps">
                        <div className="imgL"><img src="" alt="" /></div>
                        <div className="imgR"><img src="" alt="" /></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Signup