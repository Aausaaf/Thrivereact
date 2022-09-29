import logo from './logo.svg';
import './App.css';
import {Route,Routes, useNavigate} from 'react-router-dom'
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Productdetails from './Page/ProductDetails/Productdetails';
import Navbar from './Navbar';
import Cart from './Page/Cart/Cart';
import { useEffect } from 'react';
import Placeorder from './Page/Cart/placeorder';


function App() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("tokens"))
    {
       navigate("/login")
    }
  },[]
  )
   
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
   <Route path='/product/:id' element={<Productdetails/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/place' element={<Placeorder/>}/>
   </Routes>
   
   </>
  );
}

export default App;
