import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import Footer from './Footer';

function App() {
  const date = new Date()
  const hours = date.getHours()
  const sec = date.getSeconds()
  let wish
   if (hours <12){
    wish = 'morning'
   }
    else if (hours >=12 && hours <17){
      wish = 'afternoon'
    }
    else {
      wish = 'night'
    }
  return (
    <h1>Good {wish} and the time was {hours+":"+sec}</h1>
  )
}


export default FirstApp;
