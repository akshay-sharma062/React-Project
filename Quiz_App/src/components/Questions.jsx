import React from "react";

function Questions({ questions, options, handleClick, answer ,nextQuestion }) {
  return (
    <div className="p-4 w-96 bg-black border-2 rounded-4xl m-5 shadow-xl hover:shadow-amber-300 duration-700 shadow-blue-700">
      <h1 className="p-4 flex justify-center text-5xl  font-bold">
        Here you can test your knowledge
        
      </h1>
      <div className="text-3xl  mt-2 flex justify-center font-medium">
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
                ? "bg-yellow-500 text-amber-50 font-medium text-2xl  w-xs  flex justify-center  mt-6 rounded-4xl p-2"
                : "text-2xl flex text-amber-600 bg-amber-50 justify-center items-center w-xs border-black border-1 hover:shadow-2xl shadow-amber-500  duration-600 mt-6 rounded-4xl p-2 hover:bg-yellow-500 "
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
                ? "cursor-not-allowed rounded-2xl font-bold border-2 mb-2 text-2xl w-30 bg-gray-500"
                : "text-2xl w-30 bg-green-400 rounded-2xl mb-2 font-bold border-2 hover:border-amber-300 text-black p-2 duration-500  hover:bg-amber-300 cursor-pointer"
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
