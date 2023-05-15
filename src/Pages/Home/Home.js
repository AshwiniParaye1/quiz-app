import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";
import { Toaster, toast } from "react-hot-toast";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      toast.error(" All fields are required!");
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 20 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage></ErrorMessage>}
          <TextField
            style={{ marginBottom: 20 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            id="start"
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <div
        className="banner"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {" "}
        <img src="" alt="" />
        <h1 style={{ textAlign: "center" }}>Welcome to the Quiz Mode!</h1>
        <p>
          Test your knowledge with our exciting quiz. Choose your settings to
          get started! <br />{" "}
          {/* <span>(You will have 15sec for each question!)</span> */}
        </p>
      </div>{" "}
      <img
        className="banner-img"
        src="/4.png"
        // className="banner"
        alt="quiz app"
      />
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default Home;
