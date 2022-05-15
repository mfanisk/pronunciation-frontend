import './App.css';

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import LoginBox from "./components/LoginBox";
import useToken from './hooks/useToken';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const { token, setToken } = useToken();
  const [validUser, setValidUser] = useState((token === "Valid") ? true : false);

  return (
    <div className="App">
      <Router>
        <NavBar validUser={validUser} setValidUser={setValidUser} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/sign-in" element={<LoginBox setToken={setToken} setValidUser={setValidUser} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
