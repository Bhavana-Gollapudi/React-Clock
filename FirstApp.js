import React from 'react';

function FirstApp() {
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
  const styles = {
    color:green,
    backgroundColor:white //in JS, it is background-color
  }
  return (
    <h1 style = {styles}>Good {wish} and the time was {hours+":"+sec}</h1>
  )
}


export default FirstApp;
