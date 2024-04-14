import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default async function Header() {
    const { userId } = auth();

  return (
    <div className='w-full border-b border-b-gray-200'>
        <div className='container mx-auto py-3'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-10'>
                    <a className='text-xl font-bold text-sky-600 cursor-pointer'>NextAuth.</a>
                    <div className='flex gap-5 text-gray-800'>
                        <Link href='/' className='cursor-pointer'>Home</Link>
                        <a className='cursor-pointer'>FAQ</a>
                    </div>
                </div>
                {userId ? (
                    <div className='flex items-center gap-4 text-sm'>
                        <span className='cursor-pointer'>admin</span>
                        <UserButton afterSignOutUrl='/'/>
                    </div>
                ) : ( 
                    <div className='flex gap-4 text-gray-800'>
                        <Link href='/sign-in' className='border border-gray-300 px-4 py-2 text-sm font-semibold rounded-md'>Sign in</Link>
                        <Link href='/sign-up' className='bg-sky-600 text-white px-4 py-2 text-sm font-semibold rounded-md'>Sign up</Link>
                    </div>
                )}
                
            </div>
        </div>
    </div>
  )
}
