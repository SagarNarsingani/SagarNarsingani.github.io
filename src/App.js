import { Navbar } from './components/Navbar';
import './App.css';
import { MobileBar } from './components/MobileBar';
import { Landing } from './components/Landing';
import { SocialLinks } from './components/SocialLinks';
import { EmailBar } from './components/EmailBar';
import { About } from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileBar/>
      <Landing/>
      <SocialLinks/>
      <EmailBar/>
      <About/>
    </div>
  );
}

export default App;
