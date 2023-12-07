import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import About from './components/about'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:src" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
