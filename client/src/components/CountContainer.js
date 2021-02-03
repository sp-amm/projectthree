import React, { useState, useRef } from 'react';
import axios from 'axios';
import './style.css'
import Countdown, { zeroPad } from 'react-countdown';
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

 
 
const CountContainer = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const loggedInUser = {user};
    const UserEmail = loggedInUser.user.name;
    console.log(UserEmail);

    //set state for the counter
    const [count, setCount] = useState(0);
    
    //set state for the user
   /*  const [user, setUser] = useState() */
    
    // custom rendering for the react-countdown component from npm react-countdown       
    const renderer = ({ minutes, seconds, completed }) => {
    return((completed) ? <Button className="submitbtnstyle" type="submit" onClick={handleSubmit} >Click to submit your count.</Button> 
    : <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>)
}

    //Submit count data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isAuthenticated){
        axios.post("api/user/", {
          email: UserEmail,
          count: count,
          date: Date.now()
        })
          .then(function(response) {
            console.log(response)
          })
          .catch(err => console.log(err));
        } else {return (alert("You need to login."))}
};  
      

   //enable start button for timer
    const ref = useRef()
    const handleStart = (e) => {
        ref.current?.start();
    };
    const handlePause = (e) => {
        ref.current?.pause();
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