import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/LoginPage'
import StudentPage from './components/StudentPage'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
           <Route path="/students">
            <StudentPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
