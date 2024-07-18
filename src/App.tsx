import React, { useEffect, useState } from 'react';
import './style.scss';


type Timer = NodeJS.Timer | null;
// type Timer = ReturnType<typeof setInterval> | null;

const App: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: Timer = null; //TODO type
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
        
      }, 10);
    } else {
      interval && clearInterval(interval);
    }
    return () => {
      interval && clearInterval(interval);
    };
    
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => setIsPaused(!isPaused);

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };


  return (
    <div className="stopwatch-page">
      <div className='analog-timer-wrap'>
      <div className='num num-start'>60</div>
      <div className='num num-quarter'>15</div>
      <div className='num num-half'>30</div>
      <div className='num num-three-quarters'>45</div>
      <div className='hand hand-min' style={{transform: `rotate(${((time / 60000) * 360) + 90}deg)`}}></div>
        <div className='analog-timer-bg'></div>
      </div>
      <div className="button-wrap">
        {!isActive ?
          (<button type="button" onClick={handleStart}>Start</button>) :
          (<button type="button" onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>)}
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
      <div className="digital-timer">
        <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span>
      </div>
    </div>
  );
};
export default App;
