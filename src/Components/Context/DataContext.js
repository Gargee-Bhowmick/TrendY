import React, { useState } from "react";
import MainContext from "./MainContext.js";
import axios from 'axios';
export default function DataContext(props) {
  const [Data, setData] = useState([
    {
      key: 1,
      title: "cloth1",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 2,
      title: "cloth2",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 3,
      title: "cloth3",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 4,
      title: "cloth4",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 5,
      title: "cloth5",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 6,
      title: "cloth6",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 7,
      title: "cloth7",
      buy: 1300,
      rent: 1245,
    },
    {
      key: 8,
      title: "cloth8",
      buy: 1300,
      rent: 1245,
    },
  ]);
  const[user,setUser] = useState({})
  const register= async ()=>{
    try{
      const res=await axios.post('http://localhost:8000/createuser',user)
    console.log("Successfully Signed Up")
  }
  catch(error)
  {
    console.log(error.response.data)
  }
}
  const allData= async ()=>{
  try{
    const res = await axios.get("http://localhost:8000/find")
    console.log(res.data)
  }
  catch(error)
  {
    console.log(error.response.data)
  }      
  }
  const login= async ()=>{
    try{
    const res= await axios.post("http://localhost:8000/login",user)
    console.log("You have successfullly logged in")
  }
  catch(error)
  {
    console.log(error.response.data)
  }

  } 
   return (
    <MainContext.Provider value={{Data,setData,user,setUser,register,allData,login}}>
    {props.children}
    </MainContext.Provider>  
    );
}
