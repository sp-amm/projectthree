import axios from 'axios';
import React from 'react';
import { Line } from 'react-chartjs-2'
//import API from '../utils/API'

const email = "bebop@gmail.com";

    let statelabels = [];
    let statedatasets = [];
    let statedata = {};
    let updated = false;


    //calling for user data
    
    axios.get("/api/user/")
    .then(function (response){
        //console.log(response);
        //console.log(response.data);
        //console.log(response.data.map(({count}) => count));
        const dataArr = response.data.map(({count}) => count)
        statedatasets = [{
                label: "Movements",
                data: dataArr
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
        updated = true;  
    })
    .catch(function (error) {
        console.log(error);
    });
    

class DataGraph extends React.Component {

    
    constructor(props){
            super(props);

            this.state = {data:{
                labels: ["1", "2", "3"],
                datasets: [{
                    label: "Movement",
                    data: [14, 34, 26]
                }]
            }}
    };

    updateprops = () => {
        if (updated===true){
            this.state = this.setState(statedata)
        }
        this.updateprops();
    }

        setGradientColor = (canvas, color) => {
            const ctx = canvas.getContext('2d')
            const gradient = ctx.createLinearGradient(0, 0, 600, 550);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)")
            return gradient
        }

        getChartData = canvas => {
            const data= this.state.data;
            if(data.datasets){
                let colors = ["rgba(255, 0, 255, 0.75)", "rgba(255, 0, 255, 0.75)"]
                data.datasets.forEach((set, i) => {
                    set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                    set.borderColor = "white";
                    set.borderWidth = 1;
                })  
            }return data;
        };
        
    render() {
    return (
    <div style={{ postion:"relative", width:600, height:550, }}>
        <h3>Daily Movement Count</h3>
            <Line
                options={{
                    responsive:true
                }}
                data={this.getChartData}
            />
    </div>
    
    )};
};

export default DataGraph;