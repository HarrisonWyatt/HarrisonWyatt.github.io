import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Stars from './components/stars.js';
import Navs from '../src/routes/navbar.js';
import '../src/css/home.css';
import React, {useState} from 'react';
const App = () => {
  const [counter, setCounter]  = useState(0);
  // onClick={() => setcounter((prevCount) => prevCount = +1 )};


  return (
    <div>
      <Container fluid>
      <div><Stars /></div>
        <Row >
      <div><Navs /></div>
        </Row>
        <Row fluid>
        <Col>
      <img class="circular--square" src ={require('./pan.jpg')} alt='headshot' />
      </Col>
      </Row>
      <Row>
        <Col><p>Harrison Wyatt</p></Col>
      </Row>
      </Container>
  </div>
  )
};

export default App
