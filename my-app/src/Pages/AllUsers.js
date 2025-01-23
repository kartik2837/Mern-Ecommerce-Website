import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { FaRegEdit } from "react-icons/fa";
import ChangeRole from '../Component/ChangeRole';



const AllUsers = () => {

    const [allUser, setAllUsers] = useState([]);
    const [openUpdateRole, setOpenUpdateRole] = useState(false)

    const [updateUserDetails, setUpdateUserDetails] = useState({
        email: "",
        name: "",
        role: "",
        _id: "",
    })
    const fetchAllUsers = async () => {
        const fetchData = await fetch(SummaryApi.AllUser.url, {
            method: SummaryApi.AllUser.method,
            credentials: 'include'
        })
        const dataResponse = await fetchData.json()
        if (dataResponse.success) {
            setAllUsers(dataResponse.data)
        }
        if (dataResponse.error) {
            toast.error(dataResponse.messsage)
        }


    }

    useEffect(() => {
        fetchAllUsers()

    }, [])
    return (
        <div className='bg-white pb-4'>
            <table className='w-full userTable'>
                <thead>
                    <tr className='bg-blue-600 text-white font-bold'>
                        <th>Sr.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        allUser.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.role}</td>
                                    <td>{moment(el?.createAt).format('LLL')}</td>
                                    <td>
                                        <button className='bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-500' onClick={() => {
                                            setUpdateUserDetails(el)
                                            setOpenUpdateRole(true)
                                        }}>
                                            <FaRegEdit className='w-5 h-5' />
                                        </button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {

                openUpdateRole && (
                    <ChangeRole onClose={() => setOpenUpdateRole(false)} name={updateUserDetails.name}
                        email={updateUserDetails.email} role={updateUserDetails.role} userId={updateUserDetails._id} callFunc={fetchAllUsers} />
                )

            }



        </div>
    )
}

export default AllUsers
