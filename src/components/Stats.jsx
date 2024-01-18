import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContextProvider';

const Stats = () => {
    const {darkTheme, getUser} = useContext(ThemeContext)

  return (
    <div className={`${darkTheme ? 'bg-[#141D2F] ': 'bg-[#F6F8FF]'} flex justify-between  py-3 px-4 rounded text-[13px] ` }>
      <div>
            <h3>Repos</h3>
            {getUser ? 
           ( <p>{getUser?.public_repos}</p>) : ( <p>8</p>)  
          }
          </div>
          <div>
            <h3>Followers</h3>
            {getUser ? 
           ( <p>{getUser?.followers}</p>) : ( <p>3938</p>)  
          }
          </div>
          <div>
            <h3>Following</h3>
            {getUser ? 
           ( <p>{getUser?.following}</p>) : ( <p>9</p>)  
          }
          </div>
    </div>
  )
}

export default Stats
