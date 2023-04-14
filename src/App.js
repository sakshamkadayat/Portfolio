import './App.css';
import Navbar from './components/common/navbar';
import Home from './components/home';
import About from "./components/about.jsx";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
     <Home/>
     <About></About>
    </div>
  );
}

export default App;
