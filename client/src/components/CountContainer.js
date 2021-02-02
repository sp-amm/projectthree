import React, { useState, useRef } from 'react';
import './style.css'
import Countdown, { zeroPad } from 'react-countdown';
import { Button } from "react-bootstrap";
import API from "../utils/API";
 
 
const CountContainer = (props) => {

    //set state for the counter
    const [count, setCount] = useState(0);
    
    //set state for the user
   /*  const [user, setUser] = useState() */
    
    // custom rendering for the react-countdown component from npm react-countdown       
    const renderer = ({ minutes, seconds, completed }) => {
    return((completed) ? <Button className="submitbtn" type="submit" onClick={handleSubmit}>Submit</Button> 
    : <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>)
}
      
   //enable start button for timer
    const ref = useRef()
    const handleStart = (e) => {
        ref.current?.start();
    };
    const handlePause = (e) => {
        ref.current?.pause();
    };

    //Submit count data
    const handleSubmit = (e) => {
        e.preventDefault();
        API.savePost({
          count: count
        })
          .then(result => {
            console.log(props.count)
          })
          .catch(err => console.log(err));
    }; 

    return(
        <div>
            <div className="counttime">
                <Countdown 
                date={props.date} 
                renderer={renderer} 
                autoStart={false} 
                ref={ref}/>
            </div>
            <div>
                <Button className="countbtn" onClick={()=> setCount(count+1)}></Button>
            </div>    
            <div>
                <span>Baby's moved {count} times.</span>
            </div>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handlePause}>Pause</Button>
            <Button>Restart</Button>
        </div>
    )
}

export default CountContainer;