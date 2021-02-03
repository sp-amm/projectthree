import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import DataGraph from './DataGraph';
import { useAuth0 } from "@auth0/auth0-react";

const DataContainer = () => {
    
    //vriables to store data from axios call
    let statelabels = [];
    let statedatasets = [];
    let statedata = {};
    let updated = false;

    //calling for user data to set state for use
    axios.get("/api/user/")
    .then(function (response){
        //console.log(response);
        //console.log(response.data);
        const countArr = response.data.map(({count}) => count)
        statedatasets = [{
                label: "Movements",
                data: countArr
        }]
        console.log(statedatasets);
        statelabels = response.data.map(({date}) => (date))
                        .map(date => date.toLocaleString());
        console.log(statelabels);
        statedata = {data:{
            labels: statelabels,
            datasets: statedatasets
        }}
        console.log(statedata);
        return statedata; 
        updated = true;  
    })
    .catch(function (error) {
        //console.log(error);
    });


    //Retreiving user email from Auth0
    const { user, isAuthenticated } = useAuth0();
    const loggedInUser = {user};
    const loggedEmail = loggedInUser.user.name;
    console.log(loggedEmail)
        
    //setting state to pass to child
    const [email, setEmail] = useState("");
    const [userData, setData] = useState({});
    
    setEmail(loggedEmail);
    setData(statedata);
    
    //useEffect to stop infinite loop with rerender and axios call
/*     useEffect(() =>{
            fetchData(); 
            fetchUserEmail();
            setEmail(UserEmail);
            setData(statedata); 
    }, []) */
    

    return(
        <div>
            <DataTable />
            <DataGraph email={email} data={userData}/>
        </div>
    )
}

export default DataContainer;