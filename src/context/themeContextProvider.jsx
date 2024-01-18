import React, { createContext, useState } from 'react';
import axios from 'axios';


export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [query, setQuery] = useState('');
    const [getUser, setGetUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const themeToggler = () => {
        setDarkTheme(!darkTheme)
    }

    const handleSubmit = () => {
        if(!query){
          alert('Field is required')
        } else {
          fetchUserData(query)
          setQuery('')
        }  
    
      }

      const fetchUserData = async (getUser) => { 
        try {
            setLoading(true) // this right here engages the user that hey there is some data loading so wait small lol
            const response = await axios.get(`https://api.github.com/users/${getUser}`, {
              headers:{
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
              }
            });
      
            console.log("Response Headers:", response.headers);
            console.log("Status Code:", response.status);
            
            // so after the data fetch is done where do we store it and use it? let us create a variable to hold
            const data = await response.data
            console.log(data);
            // now that we have the data lets set the setLoading to false so we can use the fetched data
            setLoading(false)
            setGetUser(data) // now we have assigned the entire fetched data to the useState setgetUser
            setError(null) // Clear the error when a successful search is made
      
        } catch (err) {
            console.error(err);
            setError('No results', err) // just incase something happens we use this right here to handle it
        }
      }
      
      

  return (
    <ThemeContext.Provider value={{
                                    darkTheme, 
                                    themeToggler, 
                                    query, 
                                    setQuery, 
                                    handleSubmit, 
                                    getUser, 
                                    setGetUser, 
                                    loading, 
                                    setLoading, 
                                    error, 
                                    setError,
                                    fetchUserData
                                    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
