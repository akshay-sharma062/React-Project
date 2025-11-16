"use client"

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"
import { AiOutlinePlus } from "react-icons/ai"

function AddTodo() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-16 pb-20 bg-gradient-to-b from-gray-900 to-black">

      {/* Main Container */}
      <div className="w-full max-w-2xl bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-700 animate-fadeIn">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Add New Todo
        </h2>

        {/* Form */}
        <form
          onSubmit={addTodoHandler}
          className="flex gap-4 items-center"
        >
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter your todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="
              flex-1 px-5 py-4 rounded-xl
              bg-gray-900/80 text-white
              placeholder-gray-400
              border border-gray-700
              focus:outline-none focus:border-indigo-500
              shadow-lg
              transition-all duration-300
              focus:scale-[1.03]
            "
          />

          {/* Add Button */}
          <button
            type="submit"
            className="
              flex items-center justify-center gap-2
              px-6 py-4 rounded-xl font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-600
              text-white shadow-lg 
              hover:shadow-indigo-500/40 hover:scale-[1.08]
              transition-all duration-300 active:scale-95
            "
          >
            <AiOutlinePlus className="text-2xl" />
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddTodo
