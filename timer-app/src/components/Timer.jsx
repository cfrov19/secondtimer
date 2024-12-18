import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSetTime } from './timerSlice';
import styles from './Timer.module.css';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [working, setWorking] = useState(false);
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [timeSaved, setTimeSaved] = useState(false); 

  const dispatch = useDispatch();
  const setTimes = useSelector((state) => state.timer.setTimes);

  useEffect(() => {
    let interval;
    if (working && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (working && time === 0) {
      setWorking(false);
      alert('Time is up!');
    }

    return () => clearInterval(interval);
  }, [working, time]);

  const formatTime = (t) => {
    const seconds = Math.floor(t % 60);
    const minutes = Math.floor((t / 60) % 60);
    const hours = Math.floor(t / 3600);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (time > 0) {
      setWorking(true);

      if (!timeSaved) {
        dispatch(addSetTime(time));
        setTimeSaved(true);
      }
    }
  };

  const handlePause = () => {
    setWorking(false);
  };

  const handleReset = () => {
    setWorking(false);
    setTime(0);
    setHours('');
    setMinutes('');
    setSeconds('');
    setTimeSaved(false); 
  };

  const handleSetTime = () => {
    const h = parseInt(hours || 0, 10);
    const m = parseInt(minutes || 0, 10);
    const s = parseInt(seconds || 0, 10);

    if (h >= 0 && m >= 0 && s >= 0) {
      const totalSeconds = h * 3600 + m * 60 + s;
      setTime(totalSeconds);
      setWorking(false);
      setTimeSaved(false); 
    } else {
      alert('Please enter valid time values!');
    }
  };

  return (
    <div>
      <h1>Timer</h1>
      <div className={styles.timer}>{formatTime(time)}</div>
      <div className={styles.inputs}>
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          disabled={working}
          min={0}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          disabled={working}
          min={0}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          disabled={working}
        />
        <button onClick={handleSetTime} disabled={working}>
          Set Time
        </button>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleStart} disabled={working || time === 0}>
          Start
        </button>
        <button onClick={handlePause} disabled={!working}>
          Pause
        </button>
        <button onClick={handleReset} disabled={working}>
          Reset
        </button>
      </div>
      <div className={styles.storage}>
        <h3>Set Times:</h3>
        <ul>
          {setTimes.map((savedTime, index) => (
            <li key={index}>{formatTime(savedTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}