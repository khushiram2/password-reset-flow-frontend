import React, { useEffect, useContext } from 'react'
import axios from "axios"
import { Api } from './GlobalApi'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Context'


export const Dashboard = () => {
const token = window.localStorage.getItem("logintoken")

const a=useContext(DataContext)
const setUserData=a.setUserData
const userData=a.userData

const navigate=useNavigate()
const axiosInstance=axios.create({
  headers:{
    Authorization:token
  }
})




const userauth=()=>{
axiosInstance.get(`${Api}/authuser`)
.then((res)=>{
  if(res.status===200){
    setUserData(res.data.user)
  }else{
    navigate("/invaliduser")
  }
})
}

useEffect(()=>{
  if(token){
    userauth()
  }else{
    alert('some error occured')
    navigate("/login")
  }

},)




  return (
    <div>
      <div style={{fontSize:"50px"}}>
        dashboard for : {userData.email}
      </div>
    </div>
  )
}
