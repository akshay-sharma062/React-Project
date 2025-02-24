import React from 'react'

function App() {
  return (
    <div className='p-10'>
      <h1 className='p-4 flex justify-center text-5xl text-amber-50 font-bold'>Here you can test your knowledge</h1>
      <div className='text-3xl text-amber-50  mt-2'>
        question</div>
      <div className='text-2xl text-amber-50 mt-2'>
        option</div>
      <div className='text-2xl text-amber-50  mt-2'>
        option</div>
      <div className='text-2xl text-amber-50  mt-2'>
        option</div>
      <div className='text-2xl text-amber-50  mt-2'>
        option</div>
      <div >
        <button className='text-3xl bg-green-400 rounded mt-5 text-black p-2 delay-700 hover:bg-amber-300 cursor-pointer '> Next </button>
      </div>
     
    </div>
  )
}

export default App
