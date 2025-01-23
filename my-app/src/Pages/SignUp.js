import React, { useState } from 'react'
import loginicon from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobase64';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import SummaryApi from '../common';
import { toast } from 'react-toastify';


const SignUp = () => {

    const [showpassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        profilePic: "",
    });

    const navigate = useNavigate()
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]
        const imagePic = await imageTobase64(file)

        setData((preve) => {
            return {
                ...preve,
                profilePic: imagePic
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === data.confirmPassword) {

            const dataResponse = await fetch(SummaryApi.SignUp.url, {
                method: SummaryApi.SignUp.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate("/login")
            }
            if (dataApi.error) {
                toast.error(dataApi.message)
            }

        } else {
            toast.error("please password and conform password")


        }


    }

    const handleSuccess = (credentialResponse) => {
        console.log('singn-in successfully', credentialResponse);
    }
    const handleError = () => {
        console.log('Sign-in is Failed')
    }
    return (
        <section id='signup'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginicon} alt='login-icons' />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer py-3 text-center absolute bottom-0 w-full'>
                                    Upload Image
                                </div>
                                <input type='file' className='hidden' onChange={handleUploadPic} />
                            </label>

                        </form>
                    </div>
                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Name:</label>
                            <div className='bg-slate-200'>
                                <input type='text' name='name' onChange={handleOnchange} value={data.name} placeholder='Enter your Name' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
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

                        </div>

                        <div>
                            <label>Conform Password</label>
                            <div className='bg-slate-200 p-2 flex'>
                                <input type={showConformPassword ? "text" : "password"} name='confirmPassword' onChange={handleOnchange} value={data.confirmPassword} placeholder='Enter your conform password' className='w-full h-full outline-none  bg-transparent' />
                                <div className='cursor-pointer text-lg' onClick={() => setShowConformPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showConformPassword ? (
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

                        </div>
                        <button className='bg-blue-600 hover:bg-green-700 text-white px-5 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Sign Up</button>
                    </form>
                    <p className='my-5'>Already have Account <Link to={"/login"} className='hover:text-red-600 hover:underline font-bold'>Login</Link></p>
                    <div className='flex justify-center items-center w-full h-full rounded-full text-white'>
                        <GoogleOAuthProvider clientId='436191989671-4jhdd4l4vo2p6rbr62ofu5lbpekqlkb7.apps.googleusercontent.com'>
                            <GoogleLogin onSuccess={handleSuccess} onError={handleError}
                            />
                        </GoogleOAuthProvider>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default SignUp
