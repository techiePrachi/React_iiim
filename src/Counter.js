import React, { useState } from 'react'
import './Home.css'

export default function Counter() {
    const[num,setNum] =useState(1);
    function Inc(){
        setNum(num+1);
    }
    function Dec(){
        setNum(num-1);
    }
  return (
    <>
    <br />
    <h1 style={{color:'red'}}>Item qty:{num}</h1>
    <button onClick={Dec}>Subtraction</button>
    <button onClick={Inc}>Addition</button>
    </>
  )
}
