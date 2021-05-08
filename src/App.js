import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import MainNavbar from './Components/MainNav/MainNav';
import Work from './Pages/Work';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <div>
      <MainNavbar/>
        <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />     
        <Route path="/contact" render={props => <Contact {...props} />} /> 
        <Route path="/work" render={props => <Work {...props} />} /> 
        <Route exact path="/about" render={props => <About {...props} />} /> 
        </Switch>

    </div>
    
  );
}

export default App;
