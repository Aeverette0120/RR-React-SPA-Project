import { BrowserRouter as Router, Link, Routes,  Route } from 'react-router-dom'



import './App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Router>
<header>
  <h1 className="title">Aquariex</h1>
        <Container>
    <Nav defaultActiveKey="/" variant="tabs" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/">Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about">About Us</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"Contact"}> 
                <Link to="/packages">Contact</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

</header>
      

      <div className="display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </Router>

      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
</Form>

    </div>
  );
}

export default App;
