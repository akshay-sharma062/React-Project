import React, { useState } from "react";
import Questions from "./Questions";

function Quiz() {
  const questions = [
    {
      question: "what is react ?",
      options: ["framwork", "library", "testing-tool", "none of these"],
      answer: "library",
    },
    {
      question: "what is 2+2 ?",
      options: ["4", "5", "6", "22"],
      answer: "4",
    },
  ];
  const [QuestionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score , setScore] = useState(0)
  const handleClick = (option) => {
    setAnswer(option);
    if (option===questions[QuestionIndex].answer) {
        setScore(score+1)
    }
  };
  const nwxtQuestion=()=>{
    setQuestionIndex(QuestionIndex+1)
    setAnswer(null)
  }

  return (<>
  
  
  {QuestionIndex < questions.length
  ?

  <div>
    <Questions
      questions={questions[QuestionIndex].question}
      options={questions[QuestionIndex].options}
      handleClick={handleClick}
      answer={answer}
      nextQuestion={nwxtQuestion}
    />
  </div>
  :<h1 className="p-20 m-20 flex justify-center text-8xl text-green-400 font-bold">Your Score is : {score}</h1>
  }
  </>
  );
}

export default Quiz;
