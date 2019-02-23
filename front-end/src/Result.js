import React, { Component } from 'react';
import Week from './Charts/Week';
import Month from './Charts/Month';
import Ratio from './Charts/Ratio';
import Navigation from './Navigation';
import { Spinner, Container, Row, Col } from 'reactstrap';

class Result extends Component {

    state = {}

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
                <Navigation />
                {
                    this.isLoaded() ? (
                        <div>
                            <Container>
                                <Row>
                                    <Col md='6'><Week weeks={this.state.weeks} /></Col>
                                    <Col md='6'><Ratio ratio={this.state.ratio} /></Col>
                                </Row>
                                <hr /><hr />
                                <Row>
                                    <Col md='12'><Month months={this.state.months} /></Col>
                                </Row>
                            </Container>

                            
                        </div>
                    ) : <Spinner color="primary" />
                }
            </div>
        )
    }
}

export default Result;