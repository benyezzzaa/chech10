import React from 'react'
import { useEffect, useRef, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import MovieCard from './MovieCard';
import '../CSS.css';
import { useSelector } from 'react-redux';

function Restaurant() {
   
   const {list} =useSelector(state=>state.restaurent)
   
    
    
    
  
  return (
    <div className='res'>
        
      {list.map((e,index)=><MovieCard restaurant={e} index={index}></MovieCard>)}

    </div>
  )
}

export default Restaurant
