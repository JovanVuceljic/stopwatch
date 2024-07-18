import React from 'react';
import './style.scss';

const App: React.FC = () => {
  /**
   * Implement the core of your task in this file.
   */

  return (
    <div className="stopwatch-page">
      <div className='stopwatch-bg'></div>
      <div className="button-wrap">
        <button type="button">Start</button>
        <button type="button">Stop</button>
        <button type="button">Reset</button>
      </div>
    </div>
  );
};
export default App;
