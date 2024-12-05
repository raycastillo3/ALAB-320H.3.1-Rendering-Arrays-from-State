export default function Score({ scores }) {
    return (
        <ul>
          {scores.map((score) => (
            <li>
              Score: {score.score} {"|"} Date: {score.date}
            </li>
          ))}
        </ul>
    );
  }