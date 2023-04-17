import './App.css';
import Navbar from './components/common/navbar';
import Home from './components/home';
import About from "./components/about.jsx";
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <Home/>
     <About></About>
     <Experience></Experience>
    </div>
  );
}

export default App;
