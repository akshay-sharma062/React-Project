import React from 'react'

export default function Result({ resultData }) {
  return (
    <div className='mt-10  shadow-black'>
      <h1 className='sm:text-6xl text-center'> {resultData?.location?.name ?? "Search Your City"}</h1>
      <div className='sm:flex justify-around mt-4 sm:text-2xl'>
        <div>Max temp : {resultData?.current?.temp_c}deg</div>
        <div>Wind Speed : {resultData?.current?.wind_kph}kph</div>
      </div>
      <div className='sm:flex justify-around sm:mt-4 sm:text-2xl'>
        <div>  {resultData?.current?.condition?.icon ? (
            <img 
              src={`https:${resultData.current.condition.icon}`}
              alt="Weather Icon"
              className='font-medium shadow-xl shadow-black h-20  rounded-4xl'
            />
          ) : (
            "No Icon"
          )} </div>
        <div className='sm:ml-36'>Weather Type : {resultData?.current?.condition?.text} </div>
      </div>
    </div>
  )
}
