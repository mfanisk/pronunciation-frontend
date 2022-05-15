import logo from './logo.svg';
import './App.css';

import NavigationBar from "./components/NavigationBar";
import Dashboard from "./components/Dashboard";
import LoginBox from "./components/LoginBox";
import useToken from './hooks/useToken';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const { token, setToken } = useToken();
  return (
    <div className="App">
      <Router>
        <NavigationBar />
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
