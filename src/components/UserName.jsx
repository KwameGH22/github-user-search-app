import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContextProvider';
import {format, parseISO} from 'date-fns';

const UserName = () => {
    const {getUser} = useContext(ThemeContext)


  return (
    <div>
      <div className='flex justify-between'>
          <div>
            {/* User name, handle and date joined  */}
              { getUser ? 
               <h1>{getUser.name}</h1> : <h1>The Octacat</h1>
              }
              {getUser?
              (<p>@{getUser.login}</p>) : (<p>@octacat</p>)
            }
            {/* Perhaps you might be using the code below but not the above well am using the above just to prevent using my static data when no search is done. honestly there might be some other way round which i dont know yet but since this is working for me just enjoy */}

            {/* <p>@{fetchUser?.login === null ? 'octacat' : fetchUser.login}</p> */}
          </div>
          <div>
          {getUser ? (
              <p>Joined {getUser.created_at}</p>) : 
              (<p>Joined 25 Jan 2023</p>)}
          </div>
        </div>
    </div>
  )
}

export default UserName
