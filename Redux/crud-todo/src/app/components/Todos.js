"use client"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"
import { FaTrashAlt } from "react-icons/fa"
import { MdPlaylistAddCheck } from "react-icons/md"

function Todos() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex items-start justify-center pt-10 pb-20 bg-gradient-to-b from-gray-900 to-black">

      {/* Main Container */}
      <div className="w-full max-w-2xl p-6 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 flex items-center justify-center gap-3">
          <MdPlaylistAddCheck className="text-indigo-400 text-4xl drop-shadow-lg" />
          Your Todos
        </h2>

        {/* Todo List */}
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="
                flex justify-between items-center 
                bg-gray-900/60 text-white 
                px-5 py-4 rounded-xl 
                shadow-lg border border-gray-700
                hover:scale-[1.02] hover:border-indigo-500 hover:shadow-indigo-500/40
                transition-all duration-300 ease-out
                animate-fadeIn
              "
            >
              {/* Todo Text */}
              <span className="text-lg tracking-wide">{todo.text}</span>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="
                  bg-red-600 hover:bg-red-700 
                  p-3 rounded-lg 
                  text-white font-semibold
                  shadow-md hover:shadow-red-500/40
                  transition-all duration-300
                  flex items-center justify-center active:scale-90
                "
              >
                <FaTrashAlt className="text-base" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todos
