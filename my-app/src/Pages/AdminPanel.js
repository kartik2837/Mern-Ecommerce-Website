import React, { useEffect } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import { FaHouseUser } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/")
        }

    }, [user])

    return (
        <div className='min-h-[calc(100vh-120px)] md:flex hidden'>


            <aside className='bg-white min-h-full w-full max-w-60 customShadow'>
                <div className='h-32 flex justify-center items-center flex-col'>

                    <div className='text-5xl cursor-pointer relative flex justify-center'>
                        {
                            user?.profilePic ? (
                                <img src={user?.profilePic} className='w-20 h-20 rounded-full' alt={user?.name} />
                            ) : (
                                <FaRegCircleUser />
                            )
                        }

                    </div>
                    <p className='capitalize text-lg font-semibold'>{user?.name}</p>
                    <p className='capitalize text-sm font-semibold'>{user?.role}</p>

                </div>
                <div >
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 font-semibold hover:bg-blue-500 text-center'>
                            <div className='flex justify-center gap-8  items-center'>All Users<FaHouseUser className='text-3xl hover:text-red-600' /></div>

                        </Link>
                        <Link to={"all-products"} className='px-2 py-1 font-semibold hover:bg-blue-500 text-center'>
                            <div className=' flex gap-2 justify-center items-center'>All Products<AiFillProduct className='text-3xl hover:text-red-600' /></div>

                        </Link>
                        <Link className='px-2 py-1 font-semibold hover:bg-blue-500 text-center'>
                            <div className=' flex gap-10 justify-center text-1.7xl items-center'>Setting<IoSettingsOutline className='text-3xl hover:text-red-600' /></div>

                        </Link>

                    </nav>
                </div>
            </aside >

            <main className='w-full h-full p-2'>
                <Outlet />

            </main>
        </div >

    )
}

export default AdminPanel
