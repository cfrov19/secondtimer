import React, { useEffect, useState } from 'react'
import styles from "./Hour.module.css"

export default function Hour() {
    const [time,setTime]=useState({
        hour:new Date().getHours(),
        minute:new Date().getMinutes(),
        second:new Date().getSeconds()
    })

    useEffect(()=>{
        const interval=setInterval(()=>{
            let now= new Date();
            setTime({
                hour:now.getHours(),
                minute:now.getMinutes(),
                second:now.getSeconds(),
            })  
        },1000)
        
        return () => clearInterval(interval);

    },[])

  return (
    <div>
        <h1>Hour</h1>
        <div className={styles.current}>
            <p>{time.hour}</p>
            <p>{time.minute}</p>
            <p>{time.second}</p>
        </div>
    </div>
  )
}