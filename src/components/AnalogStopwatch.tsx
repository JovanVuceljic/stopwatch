import { StopwatchProps } from "../types";

const AnalogStopwatch = ({ time }: StopwatchProps) => (<div className='analog-timer-wrap'>
    <div className='analog-timer-bg'></div>
    <div className='num num-start'>60</div>
    <div className='num num-quarter'>15</div>
    <div className='num num-half'>30</div>
    <div className='num num-three-quarters'>45</div>
    <div className='hand hand-min' style={{ transform: `rotate(${((time / 60000) * 360) + 90}deg)` }}></div>
</div>)


export default AnalogStopwatch;