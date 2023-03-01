import { Navbar } from './components/Navbar';
import './App.css';
import { MobileBar } from './components/MobileBar';
import { Landing } from './components/Landing';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileBar/>
      <Landing/>
    </div>
  );
}

export default App;
