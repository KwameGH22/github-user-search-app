import React, { useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { ThemeContext } from '../context/themeContextProvider';

const SearchBar = () => {
    const {darkTheme, query, setQuery, handleSubmit, error, fetchUserData} = useContext(ThemeContext);


  return (
    <div className={`${darkTheme ? 'bg-[#1E2A47] ': 'bg-white '} py-2 px-2 mt-4 rounded-md shadow-md m-auto w-full max-w-full`}>
       <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
             <CiSearch className='text-[#0079FF] text-[24px]' />
             <input type="text" 
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder='Search GitHub username...' 
             className={`${darkTheme ? 'bg-[#1E2A47] text-white': 'bg-white  text-[#222731]'} outline-none py-1 px-1`} />
          </div>
          <div>

                <span className=' px-3 text-red-500'>{ error && !fetchUserData.login && error}</span>
            
                <button 
                    type='submit' 
                    onClick={handleSubmit}
                    className='bg-[#0079FF] text-[#fff] py-1 px-2 rounded hover:bg-[#60ABFF]'>Search</button>
          </div>
        </div>
    </div>
  )
}

export default SearchBar
