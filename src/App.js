import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';
import './App.css';
import Stars from './stars.js'
import Navs from './navbar.js'

const App = () => {
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
