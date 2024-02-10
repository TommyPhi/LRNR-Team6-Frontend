import React from "react";
import '../css/Account.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AccountForm() {
  return (
    <div>
      <div className="container-fluid jumbotron-container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="jumbotron">
                  <h2 className="display-4">Hello, User! </h2>
                  <p className="lead">
                    Below, you may be able to edit your account settings
                    to include a profile picture, a biography, and other information.
                  </p>
                  <p>
                    <a className="btn btn-primary btn-lg" href="#">
                      Edit profile
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container for Content in the Row */}
      <div className="container-fluid content-container">
        <div className="row gx-md-4 gx-2 mt-md-4">
          <div className="col-md-6 mb-md-0 mb-3">
            
            {/* First Column */}
            <div className="miniprofile card border-gray-300 h-100">
              <div className="card-header bg-light text-center">
                <span className="h4 my-3">Hi, User!</span>
                
                <a href="/" className="btn btn-sign-out">
                  <span className="me-2">
                    <span className="bi bi-box-arrow-right"></span>
                  </span>

                  Sign Out
                </a>
              </div>
              <div className="card-body">
                <div className="list-group dashboard-menu">
                  <a href="/" className="list-group-item">Overview</a>
                  <a href="/" className="list-group-item">Settings</a>
                  <a href="/" className="list-group-item">Messages</a>
                  <a href="/" className="list-group-item">My Items</a>
                  <a href="/" className="list-group-item">Achievements</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-md-0 mb-3">
            {/* Second Column - New Content */}
            <div className="new-card card border-gray-300 h-100">
              <div className="card-header bg-light text-center">
                <h2 className="new-column-heading">Stats</h2>
              </div>
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="icon-block text-center">
                        <h2 className="teal-text text-accent-3"><i className="bi bi-fire"></i></h2>
                        <p className="header-5">Streak</p>
                        <p className="light">You have a streak of 5 days!</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="icon-block text-center">
                        <h2 className="teal-text text-accent-3"><i className="bi bi-card-list"></i></h2>
                        <p className="header-5">Platinum Quizzes</p>
                        <ul className="list-unstyled">
                          <li className="light">golang - intermediate</li>
                          <li className="light">Javascript - beginner</li>
                          <li className="light">AWS - beginner</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="icon-block text-center">
                        <h2 className="teal-text text-accent-3"><i className="bi bi-person-fill"></i></h2>
                        <p className="header-5">lrnr Level: 2</p>
                        <p className="light">150/200 xp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
