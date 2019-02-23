import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarChart extends Component {
    render() {

        const data= {
            labels: this.props.labels,
            datasets: [{
            label: this.props.label,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: this.props.data,
            }]
        }
        

        const options = {
            annotation: {
                 annotations: [{
                     drawTime: 'afterDatasetsDraw',
                     borderColor: 'red',
                     borderDash: [2, 2],
                     borderWidth: 2,
                     mode: 'vertical',
                     type: 'line',
                     value: 10,
                     scaleID: 'x-axis-0',
               }]
            },
            maintainAspectRation: false
        };

        return (
            <Bar
                data={data}
                width={100}
                height={50}
                options={options}
            />
        )
    }
}

export default BarChart;