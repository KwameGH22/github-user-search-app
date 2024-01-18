import React, { createContext, useState } from 'react';


const themeContext = createContext();

const themeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        setTheme((prevState) => prevState==='light'? 'dark' : 'light')
    }



  return (
    <themeContext.Provider value={{theme, themeToggler}}>
      {children}
    </themeContext.Provider>
  )
}

export default themeContextProvider
