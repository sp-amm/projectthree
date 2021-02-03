
import React, {setState} from 'react';
import { Line } from 'react-chartjs-2'
import './style.css'

    

class DataGraph extends React.Component {
        constructor(props){
            super(props); 
            console.log(this.props);
       

/*               setState = {data:{
                labels: ["1", "2", "3"],
                datasets: [{
                    label: "Movement",
                    data: [14, 34, 26]
                }]
            }};
           */
    };  

        setGradientColor = (canvas, color) => {
            const ctx = canvas.getContext('2d')
            const gradient = ctx.createLinearGradient(0, 0, 600, 550);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)")
            return gradient
        }

        getChartData = canvas => {
            const data= this.props.data.data;
            console.log("From Datagraph:" + JSON.stringify(data));
            if(data.datasets){
                console.log(data.datasets)
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