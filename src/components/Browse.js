import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'

const Browse = () => {
  return (
    <div className="p-10 text-white">
      <div className='flex justify-between'>
        <Header />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className='w-12' />
      </div>
    </div>
  )
}


export default Browse
