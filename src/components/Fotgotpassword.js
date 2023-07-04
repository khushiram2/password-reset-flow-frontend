import React, { useState } from 'react'
import axios from "axios"
import { Api } from './GlobalApi'



export const Forgotpassword = () => {
  const [email,setEmail]=useState("")
  const handleChange=(e)=>{
   setEmail(e.target.value)
  }
  const handleSendLink= async (e)=>{
    e.preventDefault()
    const res= await axios.post(`${Api}/pasword/resetlink`,{email})
    if(res.status===200){
      setEmail("")
      alert("Password reset link sent to your email")
    }else if(res.status===203){
      alert("user does not exist")
    }else{
      alert("some error occured")
    }
  }
  return (
    <>
      <div className='forgotpassword-container'>
        <div className='forgot-password-form'>
          <h1>
            Forgot password ?
          </h1>
          <label className='form-lable' htmlFor="email">Enter your email</label>
          <input placeholder='Email' onChange={(e) => handleChange(e)} type='email' className='form-input' name='email' />
          <button onClick={(e) => handleSendLink(e)} className='btn'>send link</button>
        </div>
      </div>
    </>
  )
}
