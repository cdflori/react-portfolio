import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import Navbar from './Components/Navbar';
import MyWork from './Pages/MyWork';

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Navbar/>
        <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />     
        <Route path="/contact" render={props => <Contact {...props} />} /> 
        <Route path="/mywork" render={props => <MyWork {...props} />} /> 
        <Route exact path="/about" render={props => <About {...props} />} /> 
        </Switch>

    </div>
    
  );
}

export default App;
