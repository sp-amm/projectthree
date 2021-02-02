import React from 'react';
import { Line } from 'react-chartjs-2'

class DataGraph extends React.Component {
    constructor(props){
            super(props);

            this.state = {
                data:{
                    labels: ["1", "2", "3", "4", "5",],
                    datasets: [{
                        label: "Movements",
                        data: [7, 4, 27, 34, 24]
                    }]
                }
            }
        }

    const getUser = () => {
        dispatchEvent({type:LOADING});
        API.getUser()
        .then(results => {
            dispatchEvent({
                type:UPDATE
            })
        })
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
                    set.bordrWidth = 1;
                })  
            }return data;
        }
        
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
    
    )
};
};
export default DataGraph;