import { Navbar } from './components/Navbar';
import './App.css';
import { MobileBar } from './components/MobileBar';
import { Landing } from './components/Landing';
import { SocialLinks } from './components/SocialLinks';
import { EmailBar } from './components/EmailBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Loader } from './components/Loader';
import { useEffect, useState } from 'react';

import { ThemeContext } from './components/ThemeContext';

function App() {
  const [Loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(prev => prev==='dark' ? 'light' : 'dark');
  };
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 4000);
    document.body.style.backgroundColor = theme==='dark' ? '#000' : '#fff';
  }, [theme, setLoaded]);

  return (
    <div className="App" id={theme}>
      <Loader/>
      {
        Loaded ? 
        <ThemeContext.Provider value={{theme, changeTheme}}>
          <Navbar />
          <MobileBar/>
          <Landing/>
          <SocialLinks/>
          <EmailBar/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </ThemeContext.Provider> 
        : null}
    </div>
  );
}

export default App;
