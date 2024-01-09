import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Journalism from './Journalism';
import CreativeWriting from './CreativeWriting';
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={
          <Homepage/>
        }/>
        <Route exact path="/journalism" element={
          <Journalism/>
        }/>
        <Route exact path="/creativewriting" element={
          <CreativeWriting/>
        }/>
        <Route exact path="/contact" element={
          <Contact/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
