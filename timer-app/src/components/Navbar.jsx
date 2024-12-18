import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link className={styles.link} to="/hour">Hour</Link></li>
            <li><Link className={styles.link} to="/second">Stopwatch</Link></li>
            <li><Link className={styles.link} to="/timer">Timer</Link></li>
        </ul>
    </div>
  )
}