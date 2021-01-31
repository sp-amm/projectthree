import React from 'react';
import Countdown from './Countdown';
import CountButton from './Count-btn';
import Restart from './Restart-btn';
import Submit from './Submit';


const CountContainer = () => {
    return(
        <div>
            <Countdown />
            <CountButton />
            <Restart />
            <Submit />
        </div>
    )
}

export default CountContainer;