import React, { useState, useRef } from "react";
import { ProgressBar } from "react-loader-spinner";
import vernerImg from "../assets/images/transparent-turtle.png";

export default function Question(props) {
  const [answer, setAnswer] = useState({});
  const userAnswer = useRef(null);
  const answerBox = useRef(null);
  const submitBtn = useRef(null);
  const answerContainer = useRef(null);

  async function handleSubmitAnswer() {
    answerContainer.current.style.display = "none";
    submitBtn.current.disabled = true;
    answerContainer.current.style.display = "block";
    setAnswer(null);
    await fetch(
      "http://localhost:4000/api/scorequestion?question=" +
        props.question +
        "&answer=" +
        userAnswer.current.value +
        "&questionStyle=" +
        props.questionStyle +
        "&expertise=" +
        props.expertise
    )
      .then((response) => response.json())
      .then((result) => {
        setAnswer(result);
        // if (answerBox){
        //   answerBox.current.current.querySelector("button").style.display = "block";
        // }
        // answerBox.current.querySelector("button").style.display = "block";
        // nextBtn.current.style.display = "block";
        submitBtn.current.disabled = false;
      });
  }

  return (
    <div style={{ display: props.eStyle }}>
      <div class="container pt-5">
        <h1 class="display-3">Question {props.questionNum}</h1>
        <p class="lead">{props.question}</p>
        <div className="mb-3">
          <input
            type="text"
            class="form-control"
            id="userAnswer"
            aria-describedby="userAnswer"
            placeholder="Enter your answer here"
            ref={userAnswer}
          />
        </div>
        <button
          ref={submitBtn}
          class="btn btn-primary"
          onClick={handleSubmitAnswer}
        >
          Submit Answer
        </button>
      </div>
      <br />
      <div ref={answerContainer} style={{ display: "none" }}>
        {!answer || Object.keys(answer).length === 0 ? (
          <div>
            <ProgressBar
              visible={true}
              height="80"
              width="80"
              barColor="#5161ce"
              borderColor="#2d45e2"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div ref={answerBox} className="container pt-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
                <h2 className="display-4 fw-bold mb-5">
                  {answer && answer.result}
                </h2>
                <p className="lead text-muted mb-5">
                  {answer && answer.explanation}
                </p>
              </div>
              <div className="col-sm-4">
                <img className="img-fluid" src={vernerImg} alt="" />
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  props.handleNextQuestion();
                }}
                // style={{ display: "none" }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
