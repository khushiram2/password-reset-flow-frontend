import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { Api } from './GlobalApi'
export const Passwordreset = () => {
    const [password, setPassword] = useState({})
    const [uservalid, setUservalid] = useState(false)
    const navigate = useNavigate()
    const { id, token } = useParams()

    const uservalidation = async () => {
        const res = await axios.get(`${Api}/resetpassword/auth/${id}/${token}`)
        if (res.status === 200) {
            setUservalid(true)
        } else {
            alert("not valid user")
            navigate("/forgotpassword")
        }

    }

    useEffect(() => {
        uservalidation()
    },)

    const handleChange = (e) => {
        const Newpassword = {
            ...password,
            [e.target.name]: e.target.value
        }
        setPassword(Newpassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.password !== password.confirmPassword) {
            alert("password and confirm password should be same")
        } else {
            if (uservalid === true) {
                const res = await axios.put(`${Api}/setnewpassword/${id}`, { password })
                if (res.status === 200) {
                    alert("password changed sucessfully")
                    navigate("/login")
                } else {
                    alert("password couldn't be changed")
                }
            }
        }

    }
    return (
        <>
            <div className='forgotpassword-container'>
                <div className='forgot-password-form'>
                    <h1>
                        Password reset
                    </h1>
                    <label className='form-lable' htmlFor="password">New password</label>
                    <input placeholder='password' onChange={(e) => handleChange(e)} type='password' className='form-input' name='password' />
                    <label className='form-lable' htmlFor="password">Confirm new password</label>
                    <input placeholder='password' onChange={(e) => handleChange(e)} type='password' className='form-input' name='confirmPassword' />
                    <button onClick={(e) => handleSubmit(e)} className='btn'>submit</button>
                </div>
            </div>
        </>
    )
}
