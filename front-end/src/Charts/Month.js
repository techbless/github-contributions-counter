import React, { Component } from 'react';
import BarChart from './BarChart';



class Month extends Component {

    state = {}

    drawChartForMonth = () => {
        const labels = [
            'January', 'Febuary', 'March', 
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ]

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
        const month_count = this.props.months.map(month => {
            return month.count
        })
        return month_count
    }

    render() {
        return (
            <div>
                {
                    this.drawChartForMonth()
                }
            </div>
        )
    }
}

export default Month;