import React from "react";
import MultipleChoice from "../multiple_choice";

const mockQuestions = [
  {
    question: "How do you fold a towel",
    options: ["with your hands", "on the floor", "into squares"],
    answer: "into squares",
  },
  {
    question: "hello",
    options: ["hi", "hello", "how are you"],
    answer: "how are you",
  },
  {
    question: "is this dog cute",
    options: ["no", "yes", "very"],
    answer: "very",
  },
  {
    question: "question with four options",
    options: ["asdfasdf", "asd hgdethg bv", "klsjdf asoidhf", "another one"],
    answer: "klsjdf asoidhf",
  },
];

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [question, setQuestion] = React.useState(mockQuestions[questionNumber]);

  React.useEffect(() => {
    setQuestion(mockQuestions[questionNumber]);
  }, [questionNumber]);

  const renderQuestion = () => {
    if (question) {
      return (
        <div>
          {question?.question}

          <MultipleChoice
            options={question?.options}
            answer={question?.answer}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      );
    } else {
      return <div>all done!</div>;
    }
  };

  return (
    <div>
      <div className="header">Quiz Scaffold</div>
      {renderQuestion()}
    </div>
  );
};

export default Quiz;
