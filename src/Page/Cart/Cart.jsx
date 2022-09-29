import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router'
import { deletedata, getcartsdata, patchdata } from '../../Redux/action'
import "./Cart.css"
const Cart = () => {
    const {store} = useSelector((store)=>store)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [incdec,setincdec] = useState(1)
     const [tot,settot] = useState(0)
    const total = () => {
       let tem = 0
        store.cart.forEach((ele)=>{
             tem = tem +  ele.price*((ele.Quantity)?ele.Quantity:1)
            
        })
        settot(tem)
    }
    useEffect(()=>{
      total()
    },[store])
    useEffect(()=>{
        if(!localStorage.getItem("tokens"))
        {
            navigate("/login")
        }
        dispatch(getcartsdata())
    },[])
  return (<div className="cart">
    <div className="header">
        <h2>Title </h2>
        <h2>Image</h2>
        <h2>Price</h2>
    </div>
    {
        store.cart.map((ele)=>{
            return <div key={ele.id} className="cartlist">
                <p>{ele.title}</p>
                <img className='img' src={ele.image} alt="" />
                <p>{
                    
                ele.price*((ele.Quantity)?ele.Quantity:1)}</p>
                <button className='dec' onClick={()=>{
                   if(incdec>0)
                   {
                    let quant = (ele.Quantity)?ele.Quantity:1
                    let tem = quant  - 1
                    console.log(tem)
                   if(!tem)
                   {
                    dispatch(deletedata(ele.id))
                   }
                    dispatch(patchdata({
                        Quantity:tem
                    },ele.id))
                   }
                   else
                   {
                    dispatch(deletedata(ele.id))
                   } 
                }}>DEC</button>
                <p>{(ele.Quantity)?ele.Quantity:1}</p>
                <button className='inc'
                onClick={()=>{
                    if(incdec>0)
                    {
                        let quant = (ele.Quantity)?ele.Quantity:1
                        let tem = quant  + 1

                    
                     dispatch(patchdata({
                         Quantity:tem
                     },ele.id))
                    }
                    else
                    {
                        dispatch(deletedata(ele.id))
                    } 
                 }}>INC</button>
                <button onClick={()=>{
                    dispatch(deletedata(ele.id))
                }}>Delete</button>
            </div>
        })
    }
    <h1>Total Amout : {
       tot
        }</h1>
  <button onClick={()=>{
    navigate("/place")
  }}>Place order</button>

  </div>
  )
}

export default Cart