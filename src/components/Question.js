import React, { useState, useRef } from "react";
import { ProgressBar } from "react-loader-spinner";
import vernerImg from "../assets/images/transparent-turtle.png";

export default function Question(props) {
  const [answer, setAnswer] = useState({});
  const userAnswer = useRef(null);
  const nextBtn = useRef(null);
  const submitBtn = useRef(null);
  const answerContainer = useRef(null);

  async function handleSubmitAnswer() {
    answerContainer.current.style.display = "none";
    submitBtn.current.disabled = true;
    nextBtn.current.style.display = "none";
    answerContainer.current.style.display = "block";
    setAnswer(null);
    await fetch(
      "http://localhost:4000/api/scorequestion?question=" +
        props.question +
        "&answer=" +
        userAnswer.current.value +
        "&questionStyle=" +
        props.questionStyle
    )
      .then((response) => response.json())
      .then((result) => {
        setAnswer(result);
        nextBtn.current.style.display = "block";
        submitBtn.current.disabled = false;
      });
  }

  return (
    <div style={{ display: props.eStyle }}>
      <div class="jumbotron">
        <h1 class="display-3">Question {props.questionNum}</h1>
        <p class="lead">{props.question}</p>
        <div className='mb-3'>
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
      <div ref={answerContainer} style={{display: "none"}}>
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
        <div className="container pt-5">
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
              <h2 className="display-4 fw-bold mb-5">{answer && answer.result}</h2>
              <p className="lead text-muted mb-5">{answer && answer.explanation}</p>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <img className="img-fluid" src={vernerImg} alt="" />
            </div>
          </div>
        </div>
      )}
      </div>
      <button
        className="btn btn-primary"
        ref={nextBtn}
        onClick={() => {
          props.handleNextQuestion();
        }}
        style={{ display: "none" }}
      >
        Next
      </button>
    </div>
  );
}
