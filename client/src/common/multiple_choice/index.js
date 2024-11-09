import React from "react";

const MultipleChoice = ({ options, answer, setQuestionNumber }) => {
  const [choice, setChoice] = React.useState("");

  const checkAnswer = () => {
    console.log(choice, answer);
    if (choice === answer) {
      console.log(true);
      setQuestionNumber((a) => a + 1);
      return true;
    }
    console.log(false);
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
