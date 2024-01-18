import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaLink } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { ThemeContext } from '../context/themeContextProvider';

const SMHandles = () => {
    const {getUser} = useContext(ThemeContext);

  return (
    <div className='wrapper text-[13px] flex gap-20'>
        <div className='flex flex-col item-center justify-center gap-2'>
            <div className='flex gap-1 items-center'>
                <FaLocationDot/>
                {getUser ? 
                ( <p>{getUser?.location}</p>) : ( <p>San Francisco</p>)  
                }
            </div>
            <div className='flex gap-1 items-center'>
                <FaLink/>
                {getUser ? 
                (<p>{getUser?.blog}</p>) : ( <p>https://github.blog</p>)  
                }
            </div>
        </div>
        <div className='flex flex-col item-center justify-center gap-2'>
            <div className='flex gap-1 items-center'>
                <FaTwitter/>
                {getUser ? 
                (<p>{getUser?.twitter_username}</p>) : ( <p>Not Available</p>)  
                }
            </div>
            <div className='flex gap-1 items-center'>
                <HiMiniBuildingOffice2/>
                {getUser ? 
                (<p>{getUser?.company}</p>) : ( <p>github</p>)  
                }
            </div>
        </div>
      
    </div>
  )
}

export default SMHandles
