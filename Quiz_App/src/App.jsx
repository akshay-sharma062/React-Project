import React from 'react'

function App() {
  return (
    <div className='p-10'>
      <h1 className='p-4 flex justify-center text-5xl text-amber-50 font-bold'>Here you can test your knowledge</h1>
      <div className='text-3xl text-amber-50  mt-2'>
        question</div>
        
      <div className='cursor-pointer'>
      <div className='text-2xl text-black justify-center flex duration-600 mt-6 rounded-4xl p-2 hover:bg-yellow-500 '>
        option</div>
      <div className='text-2xl text-black justify-center flex duration-600  mt-6 rounded-4xl p-2 hover:bg-yellow-500 '>
        option</div>
      <div className='text-2xl text-black justify-center flex duration-600  mt-6 rounded-4xl p-2 hover:bg-yellow-500 '>
        option</div>
      <div className='text-2xl text-black justify-center flex duration-600  mt-6 rounded-4xl p-2 hover:bg-yellow-500 '>
        option</div>
      <div >
        <button className='text-2xl w-30 bg-green-400 rounded-2xl mt-5 font-bold border-2 hover:border-amber-300 text-black p-2 duration-500  hover:bg-amber-300 cursor-pointer '> Next </button>
      </div>
      </div>
     
    </div>
  )
}

export default App
