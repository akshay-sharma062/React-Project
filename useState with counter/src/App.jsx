import { useState } from 'react'
import './App.css'
function App() {
  // let counter=0
  let [count,setCount] = useState(0)
  let add= ()=>{
    if (count<20) {
      setCount(count+1)
    }
  }
  let Remove= ()=>{
    if (count>0) { 
      setCount(count-1)
    }
  }
  return (
    <>
     <h1>heyyy it is a counter </h1>
     <h1>value: {count}</h1>
     <button onClick={add}>Add value {count} </button>
     <button onClick={Remove}>Remove value {count}</button>
    </>
  )
}
export default App
