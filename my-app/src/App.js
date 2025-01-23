import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { ToastContainer } from 'react-toastify';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice';
const App = () => {
  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include"
    })
    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))

    }


  }
  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductcount.url, {
      method: SummaryApi.addToCartProductcount.method,
      credentials: "include"
    })
    const dataApi = await dataResponse.json()


    setCartProductCount(dataApi?.data?.count)



  }
  useEffect(() => {
    fetchUserDetails()
    fetchUserAddToCart()

  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails,
        cartProductCount,
        fetchUserAddToCart

      }}>
        <ToastContainer />

        <Header />
        <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>


    </>
  )
}

export default App
