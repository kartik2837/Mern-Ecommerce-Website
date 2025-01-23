import React, { useContext, useState } from 'react'
import loginicon from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';


const Login = () => {
    const [showpassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",

    });

    const navigate = useNavigate()
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)


    const handleOnchange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.SignIn.url, {
            method: SummaryApi.SignIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()
        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate('/')
            fetchUserDetails()
            fetchUserAddToCart()

        }
        if (dataApi.error) {
            toast.error(dataApi.message)
        }

    }


    console.log('data Login');


    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginicon} alt='login-icons' />
                    </div>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email:</label>
                            <div className='bg-slate-200'>

                                <input type='email' name='email' onChange={handleOnchange} value={data.email} placeholder='Enter your Email' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div>
                            <label>Password</label>
                            <div className='bg-slate-200 p-2 flex'>
                                <input type={showpassword ? "text" : "password"} name='password' onChange={handleOnchange} value={data.password} placeholder='Enter your password' className='w-full h-full outline-none  bg-transparent' />
                                <div className='cursor-pointer text-lg' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showpassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }


                                    </span>

                                </div>
                            </div>
                            <Link to={"forgot-password"} className='block w-fit ml-auto hover:underline hover:text-black-700'>
                                Forgot Password
                            </Link>
                        </div>
                        <button className='bg-blue-600 hover:bg-red-700 text-white px-5 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
                    </form>
                    <p className='my-5 font-bold'>Don't have acccount ? <Link to={"/sign-up"} className='hover:text-blue-700 hover:underline'>Sign Up</Link></p>


                </div>
            </div>

        </section>
    )
}

export default Login
