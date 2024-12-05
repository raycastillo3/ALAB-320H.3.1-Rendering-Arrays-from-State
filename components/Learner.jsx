import Score from "./Score";

export default function Learner({ learner }) {
    return (
      <>
        <h2>{learner.name} </h2>
        <p> {learner.bio} </p>
        <Score scores={learner.scores} />
      </>
    );
  }