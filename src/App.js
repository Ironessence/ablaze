
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
    
      <Navbar />
    
    <Home />
    </>
  ) 
}

export default App;
