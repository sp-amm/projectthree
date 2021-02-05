import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import DataGraph from './DataGraph';
import { useAuth0 } from "@auth0/auth0-react";

const DataContainer = () => {
    
    //setting state to pass to child
    //const [email, setEmail] = useState("");
    const [userData, setData] = useState(null);

    //Retreiving user email from Auth0
    const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated===false){
        window.location.href = "/";
        alert("You need to login to access this page.");}
    const loggedInUser = {user};
    const loggedEmail = loggedInUser.user.name;
    console.log(loggedEmail);
    
    //vriables to store data from axios call
    let statelabels = [];
    let statedatasets = [];
    let statedata = {};


    //calling for user data to set state for use
    function fetchData() {
    axios.get("/api/user/" + loggedEmail)
    .then(function (response){
        //console.log(response);
        //console.log(response.data);
        const countArr = response.data.map(({count}) => count);
        statedatasets = [{
                label: "Movements",
                data: countArr
        }];
        //console.log(statedatasets);
        statelabels = response.data.map(({date}) => (date))
                        .map(date => date.toLocaleString());
        //console.log(statelabels);
        statedata = {data:{
            labels: statelabels,
            datasets: statedatasets
        }};
        console.log(statedata); 
        setData(statedata); 
    })
    .catch(function (error) {
        console.log(error);
    }); 
    };   

    //set state data
    //setEmail(loggedEmail);
    //setData(statedata);
    
    //useEffect to stop infinite loop with rerender and axios call
      useEffect(() =>{
            fetchData();
            console.log("useEffect log" + JSON.stringify(userData)) 
    }, []) 
    

    return(
        <div>
            <DataTable />
            { 
           userData ? 
            <DataGraph /* email={email} */ data={userData}/>
            :
            <> </>
            }
        </div>
    )
}

export default DataContainer;