import React from 'react'
import cancelImage from '../assest/cancel.gif'
import { Link } from 'react-router-dom'

const Cancel = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 my-2 rounded'>
            <img src={cancelImage} width={300} height={300} />
            <p className='text-blue-600 font-semibold text-xl hover:text-red-600'>Payment Cancel</p>
            <Link to={"/order"} className='p-2 mt-5 px-3 font-semibold border-2 border-green-600 text-green-600 rounded cursor-pointer hover:text-red-600'>Go to Cart</Link>
        </div>
    )
}

export default Cancel
