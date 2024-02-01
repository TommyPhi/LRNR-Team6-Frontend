// import React from "react";
// // import {Router, Route, Routes, Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';
// import '../App.css';


// export default function Header() {
//   return (
//      <div>
//       <nav className="navbar navbar-expand-lg navbar-dark" style={{
//         padding: "5px 150px",
//         background: "#2196f3",
//         color: "white"
//       }}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             LRNR
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/account">
//                   Account
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/quiz">
//                   Quiz Generation
//                 </a>
//                 <a className="nav-link" href="/results">
//                   Results Page
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    setActiveTab(path || 'home');
  }, [location]);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <a className="navbar-brand navbar-logo" href="/">
        LRNR
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="dropdown"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"></div>
          <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i>Home
            </Link>
          </li>
          <li className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}>
            <Link className="nav-link" to="/account">
              <i className="account-tab"></i>Account
            </Link>
          </li>
          <li className={`nav-item ${activeTab === 'quiz' ? 'active' : ''}`}>
            <Link className="nav-link" to="/quiz">
              <i className="quiz-tab"></i>Quiz
            </Link>
          </li>
          <li className={`nav-item ${activeTab === 'calendar' ? 'active' : ''}`}>
            <Link className="nav-link" to="/results">
              <i className="results-tab"></i>Results
            </Link>
          </li>
          <li className={`nav-item ${activeTab === 'charts' ? 'active' : ''}`}>
            <Link className="nav-link" to="/charts">
              <i className="charts-tab"></i>Charts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

