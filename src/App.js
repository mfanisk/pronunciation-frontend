import logo from './logo.svg';
import './App.css';

import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
