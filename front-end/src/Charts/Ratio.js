import React, {Component} from 'react';
import {Doughnut as DoughnutChart} from 'react-chartjs-2';

class Ratio extends Component {

    extractData = () => {
        const ratio = this.props.ratio
        return [ratio.commits, ratio.issues, ratio.pull_requests, ratio.code_review]
    }

    render () {
        const data = {
            labels: [
                "Commits",
                "Issues",
                "Pull Request",
                "Code Reviews"
            ],
            datasets: [
                {
                    data: this.extractData(),
                    backgroundColor: [
                        "#cc88c4",
                        "#36A2EB",
                        "#FFCE56",
                        "#4f8e69"
                    ],
                    hoverBackgroundColor: [
                        "#bbb3ef",
                        "#89ebff",
                        "#ffeb89",
                        "#abef7f"
                    ]
                }]
        };

    
        return (
            <div>
                <DoughnutChart data={data} />
            </div>

        );  
    }
}

export default Ratio;