import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Jumbotron, Container, Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


class Home extends Component {
    state = {
      uname: ''
    }


    handleChange = (e) => {
      this.setState({
        uname: e.target.value
      })
    }
    
    render() {
      return (
          <div className='background'>
            <Navigation />
            <Jumbotron className='background'>
              <Container className='search'>
                <Row>
                  <Col>
                    <p className='title'>Contribytics</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputGroup size="lg">
                      
                      <Input 
                        value={this.state.uname}
                        spellCheck='false'
                        onChange={this.handleChange}
                        placeholder='USER NAME'
                      />
                      <InputGroupAddon addonType="append">
                        <Button tag={Link} to={"/result/"+ this.state.uname} size='lg'>Let's See!</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
            
          </div>
      );
    }
  }

export default Home;