import React, { useContext } from 'react';
import Oval from '../assets/Oval.png';
import { ThemeContext } from '../context/themeContextProvider';

const Avatar = () => {
    const {getUser} = useContext(ThemeContext);


  return (
    <div>
      {getUser ? 
          <img src={getUser.avatar_url} alt="user-image" className=' rounded-full h-[110px] w-[150px]' /> : 
          <img src={Oval} alt="default-user-image" />
      }
    </div>
  )
}

export default Avatar
