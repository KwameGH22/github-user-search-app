import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContextProvider';


const Bio = () => {
    const {darkTheme, getUser} = useContext(ThemeContext);

  return (
    <div className=' w-full text-[14px] text-wrap'>
        {getUser ? 
           ( <p>{getUser.bio}</p>) : ( <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>)  
          } 
    </div>
  )
}

export default Bio
