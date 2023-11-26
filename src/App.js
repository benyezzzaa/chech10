import logo from './logo.svg';
import './App.css';
import { NavLink,Routes,Route } from 'react-router-dom'; 
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import Menu from './components/Menu';
import Contact from './components/Contact';
import './CSS.css';
import img from './OIP.jfif'
import RestaurantMenu from './RestaurantMenu';
import React, { useState } from 'react';
     


function App() {
  
  
  return (
    <div className="App">

      <div className='css'>
        <img src={img}></img>
<div>
     <NavLink to={'Home'} className='active'>Home</NavLink> 
     <NavLink to={'Contact'}>Contact</NavLink> 
    
     <NavLink to={'Restaurant'}>Restaurant</NavLink> 
     </div></div>
    
    <Routes>
      <Route path='Home' element={<Home></Home>}></Route>
      <Route path='Contact' element={<Contact></Contact>}></Route>
      <Route path='Restaurant/Menu/:id' element={<Menu></Menu>}> </Route>
      <Route path='Restaurant' element={<Restaurant></Restaurant>}></Route>
      
      </Routes>
      
    </div>
  );
}

export default App;
