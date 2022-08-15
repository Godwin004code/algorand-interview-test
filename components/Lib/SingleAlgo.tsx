
import React from 'react'
import Image from 'next/image'
import { AlgorandsTypes } from '../../types'

const SingleAlgo = ({ available, name, logo, unitname1}): JSX.Element => {
  return (
    <div className='border-solid border-[#B7BECC] border-[1px] rounded-lg w-[18%] mb-2 flex flex-col justify-center p-3 md:w-[45%]'>
        <div>
          {logo && <img className='w-[30px] mx-auto h-[50px]' src={logo} alt={name} />}
        </div>
        <h2 className='font-medium text-xl text-center my-2'>
          {name}
        </h2>
    <button className='w-[80px] h-[30px]  text-white text-sm mx-auto rounded-md' style={{backgroundColor: available === true ? 'green' : 'red'}}>{available ? 'Available' : 'Unavailable'}</button>
    </div>
  )
}

export default SingleAlgo