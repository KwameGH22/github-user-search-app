import React, { useContext } from 'react'
import Avatar from './Avatar'
import UserName from './UserName'
import { ThemeContext } from '../context/themeContextProvider'
import Bio from './Bio'
import Stats from './Stats'
import SMHandles from './SMHandles'

const Card = () => {
    const {darkTheme} = useContext(ThemeContext)



  return (
    <div className={`${darkTheme ? 'bg-[#1E2A47] ': 'bg-white '} text-[#4B6A9B] py-3 px-3 mt-4 rounded-md shadow-md flex gap-6 w-full`}>
      <Avatar/>
      <div className='w-full flex flex-col gap-3'>
        <UserName/>
        <Bio/>
        <Stats/>
        <SMHandles/>
      </div>
    </div>
  )
}

export default Card
