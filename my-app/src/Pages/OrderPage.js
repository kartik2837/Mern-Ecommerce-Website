import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'

const OrderPage = () => {
    const [data, setData] = useState([])
    const fetchOrderDetails = async () => {
        const response = await fetch(SummaryApi.getOrder.url, {
            method: SummaryApi.getOrder.method,
            credentials: "include"
        })
        const responseData = await response.json()
        console.log("order-list", responseData);

    }

    useEffect(() => {
        fetchOrderDetails()
    }, [])
    return (
        <div>
            order
        </div>
    )
}

export default OrderPage
