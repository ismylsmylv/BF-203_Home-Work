import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function SignForm({ setCheck }) {
    const [signName, setsignName] = useState("");
    const [signPass, setsignPass] = useState("");
    const [signEmail, setsignEmail] = useState("");
    const [isCheck, setisCheck] = useState(false);

    return (
        <div className='formLogin'>
            <h2>Sign up</h2>
            <label htmlFor="text">Username</label>
            <input type="text" id='text' placeholder='enter username' onChange={(e) => {
                setsignName(e.target.value)
                console.log(signName)
            }} />
            <label htmlFor="email" >Email</label>
            <input type="email" id='email' placeholder='enter email' onChange={(e) => {
                setsignEmail(e.target.value)
                console.log(signPass)
            }} />
            <label htmlFor="pass" >Password</label>
            <input type="password" id='pass' placeholder='enter password' onChange={(e) => {
                setsignPass(e.target.value)
                console.log(signEmail)
            }} />


            <button className='signup' onClick={
                (e) => {
                    e.preventDefault()
                    let user = {
                        "username": signName,
                        "email": signEmail,
                        "password": signPass
                    }
                    axios.post("https://654bcb115b38a59f28efb8ab.mockapi.io/users", user).then(
                        console.log(user)
                    )
                    setCheck(true)
                }
            }>Sign up</button>
            <button className='signins' onClick={() => {
                setCheck(false)
                console.log("first")
            }}>Log in instead</button>
        </div>
    )
}

export default SignForm