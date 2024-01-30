import React from "react";
import lrnrlogo from "./assets/images/lrnrlogo.png";

export default function Home() {
  return (
    <div>
      <div class="container">
        <div class="p-5 text-center">
          <div
            style={{
              display: "flex",
              height: "250px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={lrnrlogo}
              alt="LRNR logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <h4
            class="mb-3"
            style={{
              margin: "15px",
            }}
          >
            Your guided path to programming enlightenment
          </h4>
          <a
            data-mdb-ripple-init
            class="btn btn-primary btn-lg"
            href="/quiz"
            role="button"
          >
            Begin journey
          </a>
        </div>
      </div>
      <div className="container">
        <div class="card">
          <div class="card-body">This is some text within a card body.</div>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div class="card" style={{ width: "18rem;", border: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#64B6AC"
                class="bi bi-lightning-fill"
                viewBox="0 0 16 16"
                className="card-img-top"
              >
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z" />
              </svg>
              <div class="card-body">
                <h5 className="cart-title text-center">Personalized Quizzes</h5>
                <p class="card-text">
                  Greetings, young padawan. Are you ready to embark on a journey
                  of personalized enlightenment through the art of coding? Our
                  app, can create custom quizzes that align with your coding
                  skills and interests. Whether you are a novice or a master,
                  our system can generate questions that will test your
                  proficiency in programming languages, tools, and concepts
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;", border: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#64B6AC"
                class="bi bi-cash"
                viewBox="0 0 16 16"
                className="card-img-top"
              >
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
              </svg>
              <div class="card-body">
                <h5 class="card-title text-center">Rewarding</h5>
                <p class="card-text">
                  Our app is designed to be both challenging and rewarding, so
                  you can learn new concepts while enjoying the process. With
                  our personalized quiz app, you can track your progress,
                  compete with your peers, and discover new areas of expertise.
                  The journey of a thousand lines of code begins with a single
                  keystroke
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem;", border: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#64B6AC"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
                className="card-img-top"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <div class="card-body">
                <h5 class="card-title text-center">Personal SME</h5>
                <p class="card-text">
                  Welcome to the path of knowledge. Our app is like having a
                  personal subject matter expert at your side, guiding you on
                  your journey towards wisdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
    </div>
  );
}
