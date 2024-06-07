import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    
    <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup
        <span className='text-blue-800 '> ChatApp</span>
        </h1>
    <form>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>FullName</span>

                </label>
                <input type='text' placeholder='Enter FullName' className='input input-bordered w-full h-10'/>
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Username</span>

                </label>
                <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10'/>
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Password</span>

                </label>
                <input type='password' placeholder='Enter Password' className='input input-bordered w-full h-10'/>
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Confirm Password</span>

                </label>
                <input type='password' placeholder='Confirm Password' className='input input-bordered w-full h-10'/>
            </div>

            <GenderCheckbox/>


            <a href='#' className='text-sm hover:underline hover:text-blue-800 mt-2 inline-block'>
                Already have an account? Login
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2'>Signup</button>
            </div>

    </form>
    

    
    
    </div>

    </div>
  )
}

export default Signup