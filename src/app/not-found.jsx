import React from 'react'

function NotFound() {
    return (
        <div className='w-screen h-screen bg-[#f2ff9e] flex justify-center items-center'>
            <div className='flex items-center gap-[200px]'>
                <div className=''>
                    <img className='w-[500px] ' src="../assets/bigfoot.png" alt="bigfoot" />
                </div>

                <div className='flex flex-col items-center gap-7'>
                    <h1 className='text-9xl font-extrabold text-orange-600'>OOPS!</h1>
                    <p className='text-[35px] font-semibold leading-[43px] text-yellow-600'>
                        Looks like big foot <br /> has broken the link :~(
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound