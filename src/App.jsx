import { useState } from "react";
import "./App.css";
import { initialLearnersArr } from "./data";
import Learner from "../components/Learner";

export default function App() {
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
