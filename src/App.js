import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;

