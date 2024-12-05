import { useState } from "react";
import "./App.css";
import { initialLearnersArr } from "./data";

function App() {
  const [learners, setLearners] = useState(initialLearnersArr);
  return (
    <>
      <h1> Learners: </h1>
      {learners.map((learner) => {
        return <Learner key={learner.name} learner={learner} />;
      })}
    </>
  );
}

function Learner({ learner }) {
  return (
    <>
      <h2>{learner.name} </h2>
      <h4> Bio: {learner.bio} </h4>
      <Score scores={learner.scores} />
    </>
  );
}

function Score({ scores }) {
  return (
      <ul>
        {scores.map((score) => (
          <li>
            Date: {score.date} | Score: {score.score}
          </li>
        ))}
      </ul>
  );
}
export default App;
