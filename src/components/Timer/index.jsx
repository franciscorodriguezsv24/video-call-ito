// src/Timer.js
import React, { useEffect } from 'react';

const Timer = ({ isActive, time, setTime }) => {
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, setTime]);

  return (
    <div className="timer">
      <div className="time">
        {Math.floor(time / 60)}:{('0' + (time % 60)).slice(-2)}
      </div>
    </div>
  );
};

export default Timer;
