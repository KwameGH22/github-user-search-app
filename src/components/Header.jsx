import React from 'react'
import { ThemeContext } from '../context/themeContextProvider';
import { FaMoon } from 'react-icons/fa6';
import { BsSun } from 'react-icons/bs';
import { useContext } from 'react';


const Header = () => {
    const {darkTheme,themeToggler} = useContext(ThemeContext);



  return (
    <div className='flex justify-between w-full items-center'>
      <div>
        <h1>devFinder</h1>
      </div>
      <div className='flex items-center gap-4'>
        {darkTheme ? <h1>LIGHT</h1> : <h1>DARK</h1> }
          {darkTheme ? <BsSun onClick={themeToggler} />  : <FaMoon onClick={themeToggler} />}
      </div>
    </div>
  )
}

export default Header
