'use client'

import { Button } from '@material-tailwind/react'
import { FaGithub } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import React from 'react'
import FormInput from './FormInput';
import Link from 'next/link';

function FormCheck() {
    return (
        <div className='p-6'>
            <h1 className='text-3xl font-bold mt-1'>Register for a Better Experience</h1>

            <div className='max-w-9/12 mx-auto flex flex-col items-center gap-[16px] mt-8'>
                <FormInput inputText={`Name`} />
                <FormInput inputText={`Email`} />
                <FormInput inputText={`Password`} />
                <FormInput inputText={`Confirm Password`} />
            </div>

            <div className='flex items-center w-full gap-2 mt-8 mb-7 justify-center px-2'>
                <div className='w-2/12 border'></div>
                <span className='text-[11px] text-gray-500 font-medium'>Already Registed ?
                    <Link href={`/admin/login`} className='link text-blue-700 ml-2 text-[12px]'>
                        Login
                    </Link> </span>
                <div className='w-2/12 border'></div>
            </div>

            <div className='w-8/12 text-center flex mx-auto'>
                <Button
                    color='blue'
                    fullWidth
                    className='inline-block mx-auto'
                >
                    Contiunie
                </Button>
            </div>

        </div>
    )
}

export default FormCheck