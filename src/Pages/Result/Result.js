import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";
import { Link } from "react-router-dom";

const Result = ({ name, score }) => {
  const history = useNavigate();

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  const getMessage = () => {
    if (score >= 6) {
      return `Congratulations ${name}! You did great!`;
    } else {
      return `Great effort ${name}! With a little more practice and dedication, I'm sure you'll continue to improve your skills.`;
    }
  };

  return (
    <div className="result">
      <img src="/best-luck.gif" alt="" />
      <p className="score">Your final score is {score} out of 10.</p>
      <h6 className="title-msg">{getMessage()}</h6>

      <Link to="/" className="button">
        {" "}
        <button
          variant="contained"
          style={{
            alignSelf: "center",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text">Go to Homepage</span>
        </button>
      </Link>
    </div>
  );
};

export default Result;
