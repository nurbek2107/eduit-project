import { Navbar, Sidebar } from '@/components'
import React from 'react'

function layout({ children }) {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <Sidebar />
                <main className='w-full'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default layout