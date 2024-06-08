import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import {Link} from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
     const [inputs,setInputs]=useState(({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:' ',

     }))


     const {loading,signup}=useSignup()

     const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
        }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        await signup(inputs)
    }






  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    
    <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup
        <span className='text-blue-800 '> ChatApp</span>
        </h1>
    <form onSubmit={handleSubmit}>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>FullName</span>

                </label>
                <input type='text' placeholder='Enter FullName' className='input input-bordered w-full h-10'
                    value={inputs.fullName}
                    onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                />
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Username</span>

                </label>
                <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10'
                    value={inputs.username}
                    onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                />
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Password</span>

                </label>
                <input type='password' placeholder='Enter Password' className='input input-bordered w-full h-10'
                    value={inputs.password}
                    onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                />
            </div>
            <div >
                <label className='label p-2'>
                    <span className='text-base label-text text-black'>Confirm Password</span>

                </label>
                <input type='password' placeholder='Confirm Password' className='input input-bordered w-full h-10'
                    value={inputs.confirmPassword}
                    onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                />
            </div>

            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>


            <Link to="/login" className='text-sm hover:underline hover:text-blue-800 mt-2 inline-block'>
                Already have an account? Login
            </Link>

            <div>
                <button className='btn btn-block btn-sm mt-2 border ' disabled={loading}>
                    {loading? <span className='loading loading-spinner'></span>:"Sign up"}
                </button>
            </div>

    </form>
    

    
    
    </div>

    </div>
  )
}

export default Signup