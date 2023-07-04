import React, { useState } from 'react'
import axios from "axios"
import { Api } from './GlobalApi'
import { useNavigate } from 'react-router-dom'
export const Loginpage = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const userdata = {
            ...loginData,
            [e.target.name]: e.target.value
        }
        setLoginData(userdata)
    }

    const handleSubmit = () => {
        axios.post(`${Api}/login`, { loginData })
            .then((res) => window.localStorage.setItem("logintoken", res.data))
            .then(() => navigate("/dashboard"))
            .then(() => {
                setLoginData({
                    email: "",
                    password: ""
                })
            })

    }



    return (
        <div className='form-container'>
            <div className='form'>
                <div className='heading'>
                    <h1>Log in</h1>
                </div>
                <div className='form-data'>
                    <label className='form-lable' htmlFor="email">Enter your email</label>
                    <input onChange={(e) => handleChange(e)} type='email' className='form-input' name='email' />
                    <div>
                        <label className='form-lable' htmlFor="password">Enter your password</label>
                        <p style={{ cursor: "pointer", color: "blue" }} onClick={() => navigate("/forgotpassword")}> forgot password?</p>
                    </div>
                    <input onChange={(e) => handleChange(e)} type='password' className='form-input' name='password' />
                    <button onClick={() => handleSubmit()} className='btn'>submit</button>
                    <div className='sorR'>
                        don't have an account? &nbsp;  <p style={{ margin: "0px",cursor: "pointer", color: "blue" }} onClick={() => navigate("/register")}> signup </p>
                    </div>
                </div>


            </div>

        </div>
    )
}
