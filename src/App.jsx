
import { useContext } from 'react';
import './App.css'
import { ThemeContext } from './context/themeContextProvider';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Card from './components/Card';




function App() {
  const {darkTheme, themeToggler} = useContext(ThemeContext);

  return (
    <div className={`${darkTheme ? 'bg-[#141D2F] text-white' : 'bg-[#F6F8FF]'} w-[100%] h-screen font-SpaceMono  `}>
      <div className={`${darkTheme ? 'bg-[#141D2F] text-white' : 'bg-[#F6F8FF]'} sm:w-[90%] md:w-[80%] lg:w-[60%] pt-5 px-5 flex flex-col items-center m-auto`}>
        <Header/>
        <SearchBar/>
        <Card/>
      </div>
      
    </div>
  )
}

export default App
