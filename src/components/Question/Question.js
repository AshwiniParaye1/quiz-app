import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Question.css";
import { toast, Toaster } from "react-hot-toast";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const history = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
  };

  const handleNext = () => {
    try {
      if (currQues > 8) {
        history("/result");
      } else if (selected) {
        setCurrQues(currQues + 1);
        setSelected();
      } else {
        throw new Error("Please select an option first");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ width: 100, height: 50 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ width: 100, height: 50, marginLeft: "10px" }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default Question;
