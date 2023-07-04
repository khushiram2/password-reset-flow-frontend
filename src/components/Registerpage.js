import React, { useState } from 'react'
import axios from "axios"
import { Api } from './GlobalApi'
import { useNavigate } from 'react-router-dom'

export const Registerpage = () => {

    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handlechange = (e) => {
        const newUser = {
            ...registerData,
            [e.target.name]: e.target.value
        }
        setRegisterData(newUser)
    }

    const handleSubmit = () => {
        if (registerData.name === "") {
            alert("name feild can't be empty")
        } else if (!registerData.email.includes("@")) {
            alert("please enter a valid email")
        } else if (registerData.password !== registerData.confirmPassword) {
            alert("password and comfirm password should be same")
        } else {
            axios.post(`${Api}/register`, { registerData })
                .then(() => navigate("/login"))
                .then(() => {
                    setRegisterData({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    })
                })
        }


    }



    return (
        <div className='form-container'>
            <div className='form' style={{ height: "500px" }}>
                <div className='heading'>
                    <h1>Register</h1>
                </div>
                <div className='form-data'>
                    <label className='form-lable' htmlFor="name">Enter your name</label>
                    <input onChange={(e) => handlechange(e)} type='text' className='form-input' name='name' />
                    <label className='form-lable' htmlFor="email">Enter your email</label>
                    <input onChange={(e) => handlechange(e)} type='email' className='form-input' name='email' />
                    <label className='form-lable' htmlFor="password">Enter your password</label>
                    <input onChange={(e) => handlechange(e)} type='password' className='form-input' name='password' />
                    <label className='form-lable' htmlFor="confirm-password">confirm password</label>
                    <input onChange={(e) => handlechange(e)} type='password' className='form-input' name='confirmPassword' />
                    <button onClick={() => handleSubmit()} className='btn'>submit</button>
                    <div className='sorR' style={{ marginTop: "10px" }}>
                        already have an account? &nbsp;  <p style={{ margin: "0px",cursor: "pointer", color: "blue" }} onClick={()=>navigate("/login")}> sign in </p>
                    </div>
                </div>


            </div>

        </div>
    )
}
