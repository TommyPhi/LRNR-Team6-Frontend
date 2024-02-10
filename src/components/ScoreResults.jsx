import React from 'react';
import "../css/Score.css";

export default function ScoreResults() {
  return (
    <div className="main-content">
      <div className="container-fluid result-container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center"> 
            <div className="result card card-block">
              <div className="row">
                <div className="col-md-12">
                  <h1>You scored a 3 out of 5! Good job!</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}