import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Stars from './components/stars.js';
import Navs from '../src/routes/navbar.js';
import ButtonBases from './components/modals.js'
import '../src/css/home.css';
const App = () => {
  // onClick={() => setcounter((prevCount) => prevCount = +1 )};

  return (
    <div>
      <Container>
      <div><Stars /></div>
        <Row >
      <div><Navs /></div>
        </Row>
        <Row>
        <Col>
      <img className="circular--square" src ={require('./pan.jpg')} alt='headshot' />
      </Col>
      </Row>
      <Row>
        <Col><p className ="white">Harrison Wyatt</p></Col>
      </Row>
      <Row>
        <ButtonBases />
      </Row>
      <Row>
      </Row>
      </Container>
  </div>
  )
};

export default App
