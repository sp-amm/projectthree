import React from 'react';
import './style.css'
import CountButton from './Count-btn';
import Restart from './Restart-btn';
import Submit from './Submit';
import Countdown, { zeroPad } from 'react-countdown';
 

        
const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Submit />;
    } else {

      // Render a countdown
      return <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>;
    }
  };

const CountContainer = () => {
    return(
        <div>
            <div className="counttime">
            <Countdown date={Date.now() + 900000} renderer={renderer} />
            </div>
            <CountButton />
            <Restart />
        </div>
    )
}

export default CountContainer;