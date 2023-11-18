import React from 'react'
import { useState } from 'react'
// import '../../src/App.css'
import axios from 'axios'
import { Outlet, Link, useNavigate } from "react-router-dom"
function LoginForm({ setCheck, isLogged, setisLogged, setisadmin, isAdmin }) {
    const [userName, setuserName] = useState("");
    const [userPass, setuserPass] = useState("");
    const [users, setusers] = useState([]);
    // const navigate = useNavigate()
    return (
        <div className='formLogin'>
            <h2>Log in</h2>
            <label htmlFor="text">Username</label>
            <input type="text" id='text' placeholder='enter username' onChange={(e) => {
                setuserName(e.target.value)
                console.log(userName)
            }} />
            <label htmlFor="pass" >Password</label>
            <input type="password" id='pass' placeholder='enter password' onChange={(e) => {
                setuserPass(e.target.value)
                console.log(userPass)
            }} />

            <button className='signup' onClick={
                (e) => {
                    //setisLogged(true)//DELETE LATER
                    //setisadmin(true)//DELETE LATER
                    e.preventDefault()
                    axios("https://654bcb115b38a59f28efb8ab.mockapi.io/users").then(res => {
                        console.log(res.data)
                        setusers(res.data)
                        console.log(isLogged)
                        for (let elem of users) {
                            if (elem.username == userName && elem.password == userPass) {
                                console.log("logged")
                                setCheck(false)
                                setisLogged(true)
                                console.log(isLogged)
                                localStorage.setItem("loginId", elem.id)
                                // navigate("/")
                                if (elem.isAdmin == "true") {
                                    setisadmin(true)
                                    console.log(isAdmin)
                                }
                            }
                            else {
                                console.log("not")
                            }
                        }


                    })
                }

            }>Log in</button>
            <button className='signins' onClick={(e) => {
                e.preventDefault()
                setCheck(false)
                console.log("first")
            }}>Sign up instead</button>
        </div>
    )
}



export default LoginForm