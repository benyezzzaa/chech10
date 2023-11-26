import React from 'react'
import img from '../lablabi-300x238.jpg';
import img1 from './R.jfif';
import img2 from './asie-gourmande-494.jpeg';
import img3 from './cous.jpg';
import './home.css' ;
function Home() {
  return (
    <>
    <div className='fatma'>
      <p> An application delivery platform is a suite of tools that make it easier to deliver applications reliably and securely to end users.  </p>
        
        
      
      <img src={img}></img>
    </div>
    <div className='photos'>
    <p>the perfect offer for you 
        from our master chef </p>
    <div>
    <img src={img1}></img>
    <img src={img2}></img>
    <img src={img3}></img>

    </div>
    </div></>
  )
}

export default Home
