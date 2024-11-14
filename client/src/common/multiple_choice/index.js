import React from "react";

const MultipleChoice = ({ options, answer, setQuestionNumber }) => {
  const [choice, setChoice] = React.useState("");

  const checkAnswer = () => {
    if (choice === answer) {
      setQuestionNumber((a) => a + 1);
      return true;
    }
    return false;
  };

  return (
    <div>
      {options.map((op) => (
        <div style={{ cursor: "pointer" }} onClick={() => setChoice(op)}>
          {op}
        </div>
      ))}

      <button onClick={checkAnswer}>Submit</button>
    </div>
  );
};

export default MultipleChoice;
