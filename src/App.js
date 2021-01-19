import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <Router>
      
        <Navigation/>
          <div>
            <Route exact path="/about" component={About}/>
          </div>
        
  

    </Router>
  );
}

export default App;
