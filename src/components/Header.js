import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/Header.css';
import turner from '../assets/images/transparent-turtle.png'; 

export default function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setActiveTab(path || 'home');
  }, [location]);

  return (
    <Navbar expand="lg" className="navbar-mainbg">
    <a href="/">
      <img src={turner} style={{
        width: '50px',
        height: '50px'
      }}></img>
    </a>
      <Navbar.Brand href="/" className="navbar-brand-custom">LRNR</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav" className="justify-content-end">
        <Nav>
          <Nav.Item className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i>Home
            </Link>
          </Nav.Item>
          <Nav.Item className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}>
            <Link className="nav-link" to="/account">
              <i className="account-tab"></i>Account
            </Link>
          </Nav.Item>
          <Nav.Item className={`nav-item ${activeTab === 'quiz' ? 'active' : ''}`}>
            <Link className="nav-link" to="/quiz">
              <i className="quiz-tab"></i>Quiz
            </Link>
          </Nav.Item>
          <Nav.Item className={`nav-item ${activeTab === 'results' ? 'active' : ''}`}>
            <Link className="nav-link" to="/results">
              <i className="results-tab"></i>Results
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}