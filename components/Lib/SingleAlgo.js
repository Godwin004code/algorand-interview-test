
import React from 'react'

const SingleAlgo = ({assetID, available, name, logo, unitname1}) => {
  return (
    <div className='border-solid border-zinc-200 border-2 rounded-md w-[18%] mb-2 flex flex-col justify-center p-3 md:w-[45%]'>
        <div>
            <img className='w-[30px] mx-auto h-[50px]' src={logo} alt={name} />
        </div>
        <h2 className='font-medium text-xl text-center my-2'>
          {name}
        </h2>
        <button className='w-[68px] h-[30px] text-white text-sm mx-auto rounded-md' style={{backgroundColor: available === true ? 'green' : 'red'}}>Available</button>
    </div>
  )
}

export default SingleAlgo