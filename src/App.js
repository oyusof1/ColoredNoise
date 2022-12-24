import './App.css';
import ComingSoon from './components/ComingSoon';
import NavBar from './components/NavBar';
import test from './components/test';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MusicLinks from './components/MusicLinks';


function App() {
  return (
    <Router>
      <NavBar/> 
      <Routes>
        <Route exact path="/" element={<MusicLinks/>}/>
        <Route exact path="/coming-soon" element={<ComingSoon/>}/>
        <Route exact path="/test" element={<test/>}/>
      </Routes>
  </Router>
      // <ComingSoon />
  );
}

export default App;
