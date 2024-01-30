import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className='footer' style={{ backgroundColor: "#2196f3" }}>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <p style={{color: "white"}}>
                Embrace the power of our app and unlock the secrets of the
                universe, one quiz at a time. As I always say, 'Yesterday is
                history, tomorrow is a mystery, but today is a gift. That is why
                it is called the present.'
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5
                className="mb-3"
                style={{ letterSpacing: 2, color: "white" }}
              >
                Links
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="/" style={{ color: "white", textDecoration: "none"  }}>
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/quiz" style={{ color: "white", textDecoration: "none"  }}>
                    Quiz Generator
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/account" style={{ color: "white", textDecoration: "none"  }}>
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white"}}
        >
          Made with{" "}
          <a className="text-light" href="https://getbootstrap.com/" target="_blank">
            Bootstrap
          </a>
        </div>
      </footer>
    </div>
  );
}
