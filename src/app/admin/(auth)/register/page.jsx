import { FormCheck } from '../../../../components'
import React from 'react'

function Register() {
  return (
    <div className='w-screen h-screen bg-my-bg-gif bg-no-repeat bg-cover flex justify-center items-center'>
      <div className='w-[1000px] h-[550px] flex items-center'>
        <div className='w-6/12 shadow-lg rounded-lg h-full bg-card-gif bg-no-repeat bg-cover'>

        </div>
        <div className='w-5/12 h-[480px] bg-white rounded-r-lg text-center'>
          <FormCheck />
        </div>
      </div>
    </div>
  )
}

export default Register