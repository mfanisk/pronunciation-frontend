import logo from './logo.svg';
import './App.css';

import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import LoginBox from "./components/LoginBox";
import useToken from './hooks/useToken';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const { token, setToken } = useToken();
  let LOGGED_IN = false;
  if(token === "Valid"){
    LOGGED_IN = true;
  }

  return (
    <div className="App">
      <Router>
        <NavBar LOGGED_IN={LOGGED_IN}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/sign-in" element={<LoginBox setToken={setToken} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
