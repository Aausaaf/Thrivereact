import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import "./Login.css"
const Login = () => {
    const [email,setemail] = useState("")
    const [password,setpassword]= useState("")
    const navigate = useNavigate()
    const submitdata = () => {
       console.log(email,password)
        axios.post("https://reqres.in/api/login",{
                
                "password": password,
                "email": email
               
              }).then((res)=>{
                if(res.data)
                {
                  console.log(res.data)
                 localStorage.setItem("tokens",JSON.stringify(res.data.token))
                   alert("Login Successfull Go to Home page")
                    navigate("/")
                }
            }).catch((err)=>{
                console.log(err)
            })
    }
  return (<div className="login">
    <h1>Login</h1>
    <input type="text" value={email}
    placeholder="Enter email" 
    onChange={(e)=>{
        setemail(e.target.value)
    }}/>
    <input type="password" value={password}
    placeholder="Enter password"
    onChange={(e)=>{
        setpassword(e.target.value)
    }} />
    <button onClick={()=>{
      submitdata()
    }}>Login</button>
  </div>
  )
}

export default Login