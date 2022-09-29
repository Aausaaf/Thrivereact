import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import "./Productdetails.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getcartsdata, getsingledata, postdata } from '../../Redux/action'
const Productdetails = () => {
    const [data,setdata] = useState({})
    const [cartdisplay,setcartdisplay] = useState("Add To Cart")
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {store} = useSelector((store)=>store)
    console.log(store)
    const {id} = useParams()
    console.log(data)
    useEffect(()=>{
        dispatch(getcartsdata())
         dispatch(getsingledata(id))
        setTimeout(()=>{
          checkcart()
        },1000)
         
    },[id])
    const checkcart = () => {
      let data =   store.cart.filter((ele)=>{
            return ele.id == id
        })
        console.log("data"  + data)
        if(data.length != 0)
        {
            setcartdisplay("Go To cart")
        }
    }

  
  return (<div className="product">
      <img src={store.single.image} alt="image" />
      <div>
      <h1>{store.single.title}</h1>
      <h3>Brand : {store.single.brand}</h3>
      <h3>category : {store.single.category}</h3>
      <h3>price : {store.single.price}</h3>
      <button onClick={()=>{
       
        checkcart()
        if(cartdisplay == "Go To cart")
        {
            navigate("/cart")
        }
        else
        {
            dispatch(postdata(store.single))
        }
      }}>{cartdisplay}</button>
      </div>
  </div>
    
  )
}

export default Productdetails