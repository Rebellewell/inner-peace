import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import CommonQuestions from './components/CommonQuestions';
import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import PatientForms from './components/PatientForms';
import Photos from './components/Photos';
import PrivacyPolicy from './components/PrivacyPolicy';
import Rates from './components/Rates';
import Services from './components/Rates';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/patientforms" component={PatientForms} />
        <Route path="/services" component={Services} />
        <Route path="/commonquestions" component={CommonQuestions} />
        <Route path="/rates" component={Rates} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/photos" component={Photos} />
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
