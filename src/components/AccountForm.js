import React from "react";
import '../css/Account.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function AccountForm() {
  return (
    <div>
      <div className="container-fluid jumbotron-container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron card card-block">
              <h2>Hello, User!</h2>
              <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called the hero unit and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <a className="btn btn-primary btn-large" href="/">
                  Edit profile..
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Container for Content in the Row */}
      <div className="container-fluid content-container">
        <div className="row gx-4 mt-4">
          <div className="col-md-6 mb-3 mb-lg-0 d-flex flex-column">
            {/* First Column - Existing Content */}
            <div className="miniprofile card border-gray-300 p-2 h-100">
              <div className="card-header bg-white border-0 text-center d-flex flex-row flex-lg-column align-items-center justify-content-center px-1 px-lg-4">
                <div className="profile-thumbnail dashboard-avatar mx-lg-auto me-3">
                  {/* Profile Thumbnail Content */}
                </div>
                <span className="h5 my-0 my-lg-3 me-3 me-lg-0">Hi, Bonnie!</span>
                <a href="/" className="btn btn-gray-300 btn-xs">
                  <span className="me-2">
                    <span className="fas fa-sign-out-alt"></span>
                  </span>
                  Sign Out
                </a>
              </div>
              <div className="card-body p-2">
                <div className="list-group dashboard-menu list-group-sm">
                  <a href="/" className="d-flex list-group-item border-0 list-group-item-action">Overview <span className="icon icon-xs ms-auto"><span className="fas fa-chevron-right"></span></span> </a>
                  <a href="/" className="d-flex list-group-item border-0 list-group-item-action">Settings<span className="icon icon-xs ms-auto"><span className="fas fa-chevron-right"></span></span> </a>
                  <a href="/" className="d-flex list-group-item border-0 list-group-item-action">Messages<span className="icon icon-xs ms-auto"><span className="fas fa-chevron-right"></span></span> </a>
                  <a href="/" className="d-flex list-group-item border-0 list-group-item-action">My Items<span className="icon icon-xs ms-auto"><span className="fas fa-chevron-right"></span></span> </a>
                  <a href="/" className="d-flex list-group-item border-0 list-group-item-action border-0">Achievements<span className="icon icon-xs ms-auto"><span className="fas fa-chevron-right"></span></span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 mb-lg-0 d-flex flex-column">
            {/* Second Column - New Content */}
            <div className="new-card card border-gray-300 p-2 h-100">
              <div className="card-header bg-white border-0 text-center d-flex flex-row flex-lg-column align-items-center justify-content-center px-1 px-lg-4">
                <h2 className="new-column-heading"> Stats</h2>
              </div>
              <div className="card-body p-2">
                {/* Add your content for the new column here */}
                <div className="container">
                  <div className="section">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="icon-block text-center">
                          <h2 className="center teal-text text-accent-3"><i className="bi bi-fire"></i></h2>
                          <p className="header-5">Streak</p>
                          <p className="light">You have a streak of 5 days!</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="icon-block text-center">
                          <h2 className="teal-text text-accent-3"><i className="bi bi-card-list"></i></h2>
                          <p className="header-5">Platinum Quizzes</p>
                          <ul>
                            <li className="light">golang - intermediate</li>
                            <li className="light">Javascript - beginner </li>
                            <li className="light">AWS - beginner</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="icon-block text-center">
                          <h2 className="teal-text text-accent-3"><i className="bi bi-person-fill"></i></h2>
                          <p className="header-5">lrnr Level: 2</p>
                          <p className="light center">150/200 xp</p>
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
    </div>
  );
}
