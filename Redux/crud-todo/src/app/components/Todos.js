 import React from 'react'
 import { useSelector , useDispatch } from "react-redux";
import { removeTodo } from '../features/todo/todoSlice';
 
 function Todos() {
    const todos = useSelector(state => state.Todos )
    const dispatch = useDispatch()
   return (
     <div>
       
     </div>
   )
 }
 
 export default Todos
 