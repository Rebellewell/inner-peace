import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Clients from './components/Clients';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/clients" component={Clients} />
        <Route path="/services" component={Services} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
