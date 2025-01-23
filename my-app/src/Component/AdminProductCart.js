import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/indianCurrency';

const AdminProductCart = ({
    data,
    fetchdata
}) => {
    const [editProduct, setEditProduct] = useState(false)
    return (
        <div className='bg-white p-4 rounded max'>
            <div className='w-40'>
                <div className='w-32 h-32 flex justify-center items-center'>
                    <img className='mx-auto object-fill h-full' src={data?.productImage[0]} width={120} height={120} />
                </div>
                <h1 className='font-semibold text-ellipsis line-clamp-2'>{data.productName}</h1>
                <div>

                    <p className='font-semibold'>
                        {
                            displayINRCurrency(data.sellingPrice)
                        }


                    </p>
                    <div className='w-fit ml-auto p-2 bg-blue-600 rounded-full text-white hover:bg-red-600 cursor-pointer' onClick={() => setEditProduct(true)}>
                        <MdModeEdit />
                    </div>

                </div>




            </div>

            {
                editProduct && (
                    <AdminEditProduct productData={data} onClose={() => setEditProduct(false)} fetchdata={fetchdata} />
                )
            }


        </div>
    )
}

export default AdminProductCart
