import React, { useState, useRef } from "react";
import { BarLoader } from "react-spinners";
import vernerImg from "../assets/images/transparent-turtle.png";

export default function Question(props) {
  const [answer, setAnswer] = useState({});
  const userAnswer = useRef(null);
  const answerBox = useRef(null);
  const submitBtn = useRef(null);
  const answerContainer = useRef(null);
  const alert = useRef(null);

  async function handleSubmitAnswer() {
    if (!userAnswer.current.value) {
      alert.current.style.display = "block";
      // setTimeout(() => {alert.current.style.display = "none";}, 5000);
      return;
    } else {
      alert.current.style.display = "none";
    }
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
        submitBtn.current.disabled = false;
      });
  }

  return (
    <div style={{ display: props.eStyle }}>
      <div ref={alert} class="alert alert-danger" role="alert" style={{display: 'none'}}>
        &#9888; Oops! Looks like you forgot to answer the question.
      </div>
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
            autoComplete="off"
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
            <BarLoader color="#5161ce" width='100%' class='mt-5'/>
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
                style={{width: '50%'}}
                onClick={() => {
                  props.handleNextQuestion();
                }}
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
