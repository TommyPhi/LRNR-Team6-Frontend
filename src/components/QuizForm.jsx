// import React from "react";

// export default function QuizForm() {
//   return (
//     <div className="container">
//       <div className="section">
//         <div className="row">
//           <div className="col">
//             <h3>Quiz Generation Options</h3>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col mb-4">
//             Please choose your preferences below to generate your personalized quiz
//           </div>
//         </div>
//         <br />
//         <div className="row">
//           <div className="input-field col s12">
//             <select id="topic">
//               <option value="" disabled selected></option>
//               <option value="golang">golang</option>
//               <option value="aws">aws</option>
//               <option value="javascript">javascript</option>
//               <option value="ci/cd">CI/CD</option>
//               <option value="growing you own garden">home gardens</option>
//               <option value="coffee">coffee</option>
//               <option value="finger food">finger foods</option>
//             </select>
//             <label>Topic</label>
//           </div>
//           <div className="input-field col s12">
//             <select id="expertise">
//               <option value="" disabled selected></option>
//               <option value="novice">novice</option>
//               <option value="intermediate">intermediate</option>
//               <option value="expert">expert</option>
//             </select>
//             <label>Expertise</label>
//           </div>
//           <div className="input-field col s12">
//             <select id="numquestions">
//               <option value="" disabled></option>
//               <option value="5" selected>5</option>
//               <option value="10">10</option>
//               <option value="15">15</option>
//             </select>
//             <label>Number of questions</label>
//           </div>
//           <div className="input-field col s12">
//             <select id="questionstyle">
//               <option value="" disabled></option>
//               <option value="master oogway">master oogway</option>
//               <option value="1940's gangster">1940's gangster</option>
//               <option value="like i'm an 8 year old">like I'm an 8 year old</option>
//               <option value="normal" selected>normal</option>
//               <option value="master yoda">jedi</option>
//               <option value="captain jack sparrow">captain jack sparrow</option>
//               <option value="matthew mcconaughey">matthew mcconaughey</option>
//             </select>
//             <label>Style of questions</label>
//           </div>
//           <div className="input-field col s12">
//             <button
//               id="btn-categories"
//               className="btn waves-effect waves-light"
//               onClick={() => console.log("Button clicked")}
//               >
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import '../index.css'; 
import '../App.css';


export default function QuizForm() {
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">Quiz Generation Options</h3>
          </div>
        </div>
        <div className="row">
          <div className="col mb-4">
            Please choose your preferences below to generate your personalized quiz
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-3">
            <label htmlFor="topic" className="form-label">
              Topic
            </label>
            <select className="form-select" id="topic">
              <option value="" disabled selected></option>
              <option value="golang">golang</option>
              <option value="aws">aws</option>
              <option value="javascript">javascript</option>
              <option value="ci/cd">CI/CD</option>
              <option value="growing you own garden">home gardens</option>
              <option value="coffee">coffee</option>
              <option value="finger food">finger foods</option>
            </select>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="expertise" className="form-label">
              Expertise
            </label>
            <select className="form-select" id="expertise">
              <option value="" disabled selected></option>
              <option value="novice">novice</option>
              <option value="intermediate">intermediate</option>
              <option value="expert">expert</option>
            </select>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="numquestions" className="form-label">
              Number of questions
            </label>
            <select className="form-select" id="numquestions">
              <option value="" disabled></option>
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="questionstyle" className="form-label">
              Style of questions
            </label>
            <select className="form-select" id="questionstyle">
              <option value="" disabled></option>
              <option value="master oogway">master oogway</option>
              <option value="1940's gangster">1940's gangster</option>
              <option value="like i'm an 8 year old">like I'm an 8 year old</option>
              <option value="normal" selected>normal</option>
              <option value="master yoda">jedi</option>
              <option value="captain jack sparrow">captain jack sparrow</option>
              <option value="matthew mcconaughey">matthew mcconaughey</option>
            </select>
          </div>
          <div className="col-12">
          <button
            id="btn-categories"
            className="btn btn-primary btn-custom"
            onClick={() => console.log("Button clicked")}
            >
            Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
