import React from "react";
import './App.css';
import turtlelogo from "./assets/images/transparent-turtle.png";
import clearlogo from "./assets/images/clear-logo.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-v1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mr-auto text-center text-lg-left">
              <span className="d-block subheading">About</span>
              <h1 className="heading mb-3">About LRNR</h1>
              <p className="mb-5">Embrace the transformative power of LRNR, an innovative learning platform that unlocks the secrets of the universe through engaging quizzes. At LRNR, we believe in seizing the present moment as a gift, for it holds the key to a brighter future. Navigate your learning journey with LRNR, where every quiz is a step toward enlightenment.</p>
              <p className="mb-4"><a href="/quiz" className="btn btn-primary">Start Quiz Here</a></p>
            </div>
            <div className="col-lg-6">
              <figure className="illustration">
                <img src={turtlelogo} alt="hero img 2" className="img-fluid turtle-logo-img" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <figure className="illustrationtwo">
                <img src={clearlogo} alt="hero 2" className="img-fluid" />
              </figure>
            </div>
            <div className="col-lg-5 ml-auto">
              <h2 className="mb-4 section-heading custom-heading2">What is LRNR?</h2>
              <p>LRNR is not just an app; it's your guide to personalized enlightenment in the world 
                of coding. Aspiring developers, from novices to masters, can embark on a tailored journey 
                through the art of coding. Our app crafts custom quizzes that align with your unique coding 
                skills and interests. It's a rewarding experience, where challenging tasks meet the joy of learning. 
                Track your progress, compete with peers, and unveil new realms of expertise. LRNR believes that the journey
                 of a thousand lines of code begins with a single keystroke. Join us on this coding odyssey and explore the 
                 boundless possibilities of LRNR.
              </p>
              <br></br>
              <p><a href="/" className="btn btn-primary">Learn more</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="container-fluid pt-5 pb-5 bg-custom-color">
        <h1 className="text-center pt-4 pb-4 h4 custom-heading3">Information</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="single-feature flex-column d-flex h-100">
              <div className="icon one"></div>
              <div className="content">
                <h4 className="title">Personalized Quizzes</h4>
                <p className="card-text">
                  Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app can create custom quizzes that align with your coding skills and interests. Whether you are a novice or a master, our system can generate questions that will test your proficiency in programming languages, tools, and concepts.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex">
            <div className="single-feature flex-column d-flex h-100">
              <div className="icon two"></div>
              <div className="content">
                <h4 className="title">Rewarding</h4>
                <p className="card-text">
                  Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex">
            <div className="single-feature flex-column d-flex h-100">
              <div className="icon three"></div>
              <div className="content">
                <h4 className="title">Personal SME</h4>
                <p className="card-text">
                  Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}