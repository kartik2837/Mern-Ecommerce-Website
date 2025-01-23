import React, { useEffect, useState } from 'react'
import UploadProduct from '../Component/UploadProduct'
import SummaryApi from '../common'
import AdminProductCart from '../Component/AdminProductCart'

const AllProducts = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false)
    const [allproduct, setAllProduct] = useState([])
    const fetchAllProduct = async () => {
        const response = await fetch(SummaryApi.allProduct.url)
        const dataResponse = await response.json()

        setAllProduct(dataResponse?.data || [])


    }

    useEffect(() => {
        fetchAllProduct()
    }, [])
    return (
        <div>
            <div className='bg-white py-2 px-4 flex justify-between items-center'>
                <h1 className='font-bold text-lg'>All Products</h1>
                <button className='border-2 border-blue-600 text-red-600 hover:bg-blue-600 transition-all hover:text-white py-1 px-3 rounded-full' onClick={() => setOpenUploadProduct(true)}>Upload Products</button>

            </div>

            <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
                {
                    allproduct.map((product, index) => {
                        return (
                            <AdminProductCart data={product} key={index + "allProduct"} fetchdata={fetchAllProduct} />

                        )
                    })
                }
            </div>

            {
                openUploadProduct && (
                    <UploadProduct onClose={() => setOpenUploadProduct(false)} fetchData={fetchAllProduct} />
                )
            }


        </div>
    )
}

export default AllProducts
