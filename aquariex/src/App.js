import { BrowserRouter as Router, Link, Routes,  Route } from 'react-router-dom'



import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
<header>
  <h1>Aquariex</h1>
  <div className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
  </div>
</header>
      

      <div className="display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
