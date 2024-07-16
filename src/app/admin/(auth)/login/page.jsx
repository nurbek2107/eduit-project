'use client'

import Link from 'next/link'
import React from 'react'
import { FormInput } from '../../../../components'
import { Button } from '@material-tailwind/react'

function Login() {
  return (
    <div className='w-screen h-screen'>
      <div className='h-1/2 bg-login-circle bg-cover bg-no-repeat'>
      </div>

      <div className='w-[400px] text-center mx-auto -mt-[230px] bg-white shadow-lg rounded-lg'>
        <div className='px-6 py-10'>
          <h1 className='text-3xl font-bold mt-1 px-2'>Welcome Back, We've Missed You!</h1>

          <div className='max-w-9/12 mx-auto flex flex-col items-center gap-4 mt-11'>
            <FormInput inputText="Email" />
            <FormInput inputText="Password" />
          </div>

          <div className='flex items-center w-full gap-2 mt-9 mb-8 justify-center px-2'>
            <div className='w-2/12 border'></div>
            <span className='text-[11px] text-gray-500 font-medium'>
              Did not Register?
              <Link href="/admin/register" className='link text-blue-700 ml-2 text-[12px]'>
                Register
              </Link>
            </span>
            <div className='w-2/12 border'></div>
          </div>

          <div className='w-8/12 text-center flex mx-auto'>
            <Button
              color='blue'
              fullWidth
              className='inline-block mx-auto'
            >
              Continue
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login