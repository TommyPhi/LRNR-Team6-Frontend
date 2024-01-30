import React, {useState, useRef} from 'react'

export default function Question(props) {

    const [answer, setAnswer] = useState({});
    const userAnswer = useRef(null);
  
    async function handleSubmitAnswer() {
      await fetch('http://localhost:4000/api/scorequestion?question=' + props.question + '&answer=' + userAnswer.current.value + '&questionStyle=' + props.questionStyle)
      .then(response => response.json())
      .then(result => {
        setAnswer(result)
      })
    }
    
    return (
      <div style={{display: props.eStyle}}>
        <h1>{props.question}</h1>
        <input ref={userAnswer} placeholder="Your answer..."></input>
  
  
        <button onClick={handleSubmitAnswer}>Submit Answer</button>
        <p>{answer.result}</p>
        <p>{answer.explanation}</p>
        <button onClick={props.handleNextQuestion}>Next</button>
      </div>
    )
  }


