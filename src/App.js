import logo from './logo.svg';
import './App.css';

import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/sign-in" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
