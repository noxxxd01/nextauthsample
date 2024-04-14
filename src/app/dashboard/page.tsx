import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'

export default async function Dashboard() {
    const { userId } = auth();
    console.log(userId);
    const user = await currentUser();

    if(!userId || !user){
        return <div className='flex justify-center items-center container mx-auto py-4'><span className='bg-red-400 text-white py-2 px-4 rounded-md'>You are not logged in!</span></div>
    }

   
  return (
    <div>
        <div className='bg-gray-50'>
            <div className='container mx-auto'>
                <div className='flex gap-3 py-4 text-xs font-normal text-gray-800'>
                    <span>Dashboard</span>
                    <span>&#62;</span>
                    <span>{user.firstName}</span>
                </div>
            
            </div>
        </div>
        <div className='container mx-auto py-12'>
            <div className='w-[70rem] mx-auto items-center flex-row'>
                <h1 className='text-3xl font-semibold'>Welcome, <span className='font-normal'>{user.firstName} {user.lastName}</span></h1>
                <p className='mt-3 text-sm text-gray-600'>Welcome to NextAuth, your trusted companion in authentication solutions! Whether you are building a robust user authentication system for your web or mobile applications, or looking to enhance security and user experience, NextAuth has got you covered. </p>
                <div className='text-center mt-8'>
                    <h1 className='text-xl font-semibold mb-4'>Unfornately, you just got rick rolled...</h1>
                    <div className='flex items-center justify-center'>
                        <img src="https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="meme" />
                    </div>
                </div>     
            </div>
        </div>
    </div>
  )
}
