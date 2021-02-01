import React, { useState, useRef } from 'react';
import './style.css'
import Submit from './Submit';
import Countdown, { zeroPad } from 'react-countdown';
import { Button } from "react-bootstrap";
import API from "../utils/API";



 // custom rendering for the react-countdown component from npm react-countdown       
const renderer = ({ minutes, seconds, completed }) => {
    return((completed) ? <Submit /> 
    : <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>)
}
    
 
const CountContainer = (props) => {

    //set state for the counter
    const [moves, setMoves] = useState(0);
    
    //set state for the user
   /*  const [user, setUser] = useState() */
    
   //enable start button for timer
    const ref = useRef()
    const handleStart = (e) => {
        ref.current?.start();
    };
    const handlePause = (e) => {
        ref.current?.pause();
    }

    //submitting data to back end
/*     handleSubmit = (e) => {
        e.preventDefault();
        API.savePost({
          moves: this.state.moves
        })
          .then(result => {
            console.log({moves})
          })
          .catch(err => console.log(err));
    }; */

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
                <Button className="countbtn" onClick={()=> setMoves(moves+1)}></Button>
            </div>    
            <div>
                <span>Baby's moved {moves} times.</span>
            </div>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handlePause}>Pause</Button>
            <Button>Restart</Button>
        </div>
    )
}

export default CountContainer;