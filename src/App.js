import './App.css';
import Home from './pages/Home.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    // BEM
    <div className="App">
      <Router>
        <switch>
          <Route path="/search">
            <h1>SearchPage</h1>
          </Route>
          <Route>
            <Home/>
            {/* SearchPage */}
          </Route>
        </switch>
      </Router>
    </div>
  );
}
 
export default App;
 