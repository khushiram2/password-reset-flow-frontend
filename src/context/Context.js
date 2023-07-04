import React, { createContext, useState } from 'react'


export const DataContext=createContext()
export const Context = (props) => {
    const [userData,setUserData]=useState({})


  return (

    <DataContext.Provider value={{userData,setUserData}}>
       {props.children}
     </DataContext.Provider>
  )
}
