import React from 'react'
import successimage from '../assest/success.gif'
import { Link } from 'react-router-dom'
const success = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 my-2 rounded'>
            <img src={successimage} width={300} height={300} />
            <p className='text-blue-600 font-semibold text-xl'>Payment Successfully</p>
            <Link to={"/"} className='p-2 mt-5 px-3 font-semibold border-2 border-green-600 text-green-600 rounded cursor-pointer'>Home Page</Link>
        </div>
    )
}

export default success
