import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSavedTime } from './timeSlice';
import styles from './Second.module.css';

export default function Second() {
  const [time, setTime] = useState(0);
  const [working, setWork] = useState(false);
  const dispatch = useDispatch();
  const savedTimes = useSelector((state) => state.time.savedTimes); 

  useEffect(() => {
    let interval;
    if (working) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [working]);

  const formatTime = (t) => {
    const seconds = Math.floor(t % 60);
    const minutes = Math.floor((t / 60) % 60);
    const hours = Math.floor(t / 3600);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTime = () => {
    setWork(!working);
  };

  const handleReset = () => {
    setWork(false);
    setTime(0);
  };

  const handleSaveTime = () => {
    dispatch(addSavedTime(time)); 
  };

  return (
    <div>
      <div>
        <p className={styles.formatted}>{formatTime(time)}</p>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleTime}>Start/Stop</button>
        <button onClick={handleReset}>Reset</button>
        <button className={styles.circle} onClick={handleSaveTime}></button>
      </div>
      <div className="storage">
        <h3>Saved Times:</h3>
        <ul className={styles.list}>
          {savedTimes.map((savedTime, index) => (
            <li key={index}>{formatTime(savedTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}