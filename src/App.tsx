import React, { useEffect, useState } from 'react';
import './style.scss';
import { Timer } from './types';
import AnalogStopwatch from './components/AnalogStopwatch';
import DigitalStopwatch from './components/DigitalStopwatch';

const App: React.FC = () => {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [limit, setLimit] = useState<number | null>(null);

  useEffect(() => {
    let interval: Timer = null;

    if (limit && time >= limit) setIsPaused(true)
    else if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    else interval && clearInterval(interval);

    return () => {
      interval && clearInterval(interval);
    };

  }, [isActive, isPaused, limit, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => setIsPaused(!isPaused);

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const handleLimit = (e: React.ChangeEvent<HTMLInputElement>) => setLimit(Number(e.currentTarget.value) * 1000);

  return (
    <div className="stopwatch-page">
      <AnalogStopwatch time={time} />
      <div className="input-wrap">
        <input type="number" className="input-limit" onChange={(e) => handleLimit(e)} placeholder="Seconds to pause" />
      </div>
      <DigitalStopwatch time={time} />
      <div className="button-wrap">
        {!isActive ?
          (<button type="button" onClick={handleStart}>Start</button>) :
          (<button type="button" onClick={handlePauseResume}>{isPaused ? "Resume" : "Pause"}</button>)
        }
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
export default App;
