
import React from 'react';
import './menu.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Menu() {
  const {list} =useSelector(state=>state.restaurent)
  const {id}=useParams()
  console.log(id)
  const {menuItems}=list[id]
  return (
    <div className="menu-container">
      <h1>Menu</h1>

     {menuItems.map((item, index) => (
        <div className="menu-category" key={index}>
          <h2>{item.name}</h2>
          <ul>
            <li>
              <img
                src={item.image}
                alt={item.name}
                className="menu-item-image"
              />
              <div className="menu-item-details">
                <p>{item.name}</p>
                <p className="menu-item-price">${item.price.toFixed(2)}</p>
                <button className="buy-button">Buy</button>
              </div>
            </li>
          </ul>
        </div>
      ))} 
    </div>
  );
}

export default Menu;