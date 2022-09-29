import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [show,setshow] =useState("true")
  useEffect(()=>{
    if(localStorage.getItem("tokens"))
    {
      setshow(false)
    }
  })
  return (
    <div className="navbar">
        <Link to="/">Home</Link>
       {
        (show)? <Link to="/login">Login</Link> : <a
        onClick={()=>{
          localStorage.removeItem("tokens")
          window.location.reload()
        }}>Logout</a>
       }
        <Link to="/cart">Cart</Link>


    </div>
  )
}

export default Navbar