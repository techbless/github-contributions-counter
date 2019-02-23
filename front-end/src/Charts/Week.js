import React, { Component } from 'react';
import BarChart from './BarChart';



class Week extends Component {

    state = {}

    drawChartForWeek = () => {
        const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const data = this.extractData()
        return (
            <BarChart
                label={'contributions'}
                labels={labels} 
                data={data}
            />
        )
    }

    extractData = () => {
        const week_count = this.props.weeks.map(day => {
            return day.count
        })
        return week_count
    }

    render() {
        return (
            <div>
                {
                    this.drawChartForWeek()
                }
            </div>
        )
    }
}

export default Week;