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
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#f4d942"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#f4d942"
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