import React, { Component } from 'react';
import Week from './Charts/Week';
import Month from './Charts/Month';
import Ratio from './Charts/Ratio';
import Navigation from './Navigation';
import { Spinner, Container, Row, Col } from 'reactstrap';

class Result extends Component {

    state = {
        isRatioPublic: true
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
        .catch(err => this.setState({
            doesUserExist: false
        }))

        fetch("http://127.0.0.1:5000/contribution/month/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            months : json
        }))
        .catch(err => this.setState({
            doesUserExist: false
        }))

        fetch("http://127.0.0.1:5000/contribution/day/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            days : json
        }))
        .catch(err => this.setState({
            doesUserExist: false
        }))

        fetch("http://127.0.0.1:5000/contribution/ratio/" + this.props.match.params.uname)
        .then(response => response.json())
        .then(json => this.setState({
            ratio : json
        }))
        .catch(err => this.setState({
            isRatioPublic: false
        }))
        
    }

    isLoaded() {
        if(this.state.days && this.state.weeks && this.state.months) {
            if(this.state.isRatioPublic === false || this.state.ratio) {
                return true
            }
        }
        else {
            return false
        }
    }

    render() {

        const Spin = {
            textAlign: "center",
            display: "webkit-flex",
            minHeight: "100vh",
            display: "flex",
            webkitJustifyContent: "center",
            justifyContent: "center",
            webkitAlignItems: "center",
            alignItems: "center",
            backgroundColor: "#e8eaed"
        }

        return (
            <div>
                <Navigation />
                {
                    this.isLoaded() || this.state.doesUserExist ? (
                        <div>
                            {
                                <Container>
                                    <Row>
                                        <Col md='6'><Week weeks={this.state.weeks} /></Col>
                                        { this.state.isRatioPublic ? ( <Col md='6'><Ratio ratio={this.state.ratio} /></Col> ) : 'Please make sure that the data is public.' }
                                    </Row>
                                    <hr /><hr />
                                    <Row>
                                        <Col md='12'><Month months={this.state.months} /></Col>
                                    </Row>
                                </Container> 
                            }
                            
                        </div>
                    ) : this.state.doesUserExist === false ? 'UserNotFound' : <div style={Spin}><Spinner color='warning' /></div>
                }
            </div>
        )
    }
}

export default Result;