import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutAuth() {
  return (
    <div className='xl:h-[100vh]  fixed xl:static w-[80%] xl:w-full md:w-[40%] top-0 z-50 flex justify-center items-center bg-gray-100'>

        <Outlet/>
    </div>
  )
}



export default LayoutAuth