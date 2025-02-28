import React from "react";

function Questions({ questions, options, handleClick, answer ,nextQuestion }) {
  return (
    <div className="p-10">
      <h1 className="p-4 flex justify-center text-5xl text-black font-bold">
        Here you can test your knowledge
      </h1>
      <div className="text-3xl text-black  mt-2 flex justify-center font-medium">
        {questions}
      </div>
      <div className="cursor-pointer">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              handleClick(option);
            }}
            className={
              answer === option
                ? "bg-yellow-500 text-2xl text-black justify-center flex mt-6 rounded-4xl p-2"
                : "text-2xl text-black justify-center flex duration-600 mt-6 rounded-4xl p-2 hover:bg-yellow-500 "
            }
          >
            {option}
          </div>
        ))}
        <div className="flex justify-center mt-10">
          <button
            disabled={answer === null}
            className={
              answer === null
                ? "cursor-not-allowed rounded-2xl mt-5 font-bold border-2 text-2xl w-30 bg-gray-500"
                : "text-2xl w-30 bg-green-400 rounded-2xl mt-5 font-bold border-2 hover:border-amber-300 text-black p-2 duration-500  hover:bg-amber-300 cursor-pointer"
            }
            onClick={nextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
