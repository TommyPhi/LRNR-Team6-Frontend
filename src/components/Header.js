import React from "react";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style ={{
        padding: "5px 150px",
        background: "#2196f3",
        color: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            LRNR
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/account">
                  Account
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/quiz">
                  Quiz Generation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
