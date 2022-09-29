import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getdata } from '../../Redux/action'
import "./Home.css"
const Home = () => {
    const [data,setdata] = useState([])
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {store} = useSelector((product)=>product)
    console.log(store)
   
    useEffect(()=>{
        if(!localStorage.getItem("tokens"))
        {
            navigate("/login")
        }
        dispatch(getdata())
    },[])
  return (<div className="home">
 {
        store.product.map((ele)=>{
            return <div key={ele.id} className="list">
                <img src={ele.image} alt="image" />
                <h5>{ele.title}</h5>
                <button 
                onClick={()=>{
                   navigate(`/product/${ele.id}`)
                }}>More Details</button>
            </div>
        })
    } 
  </div>
  )
}

export default Home