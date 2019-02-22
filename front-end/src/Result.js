import React, { Component } from 'react';
import Week from './Charts/Week';
import Month from './Charts/Month';
import Ratio from './Charts/Ratio';

class Result extends Component {

    state = {
        ratio_public: true
    }

    componentDidMount() {
        this.fetchDatasFromServer()
    }

    fetchDatasFromServer = () => {
        fetch("http://127.0.0.1:5000/contribution/week/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            weeks : json
        }))

        fetch("http://127.0.0.1:5000/contribution/month/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            months : json
        }))

        fetch("http://127.0.0.1:5000/contribution/day/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            days : json
        }))

        fetch("http://127.0.0.1:5000/contribution/ratio/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            ratio : json
        }))
    }

    isLoaded() {
        if(this.state.days && this.state.weeks && this.state.months && this.state.ratio) {
            return true
        }
        else {
            return false
        }
    }


    render() {
        return (
            <div>
                {
                    this.isLoaded() ? (
                        <div>
                            <Week weeks={this.state.weeks} />
                            <Month months={this.state.months} />
                            <Ratio ratio={this.state.ratio} />
                        </div>
                    ) : 'loading..'
                }
            </div>
        )
    }
}

export default Result;