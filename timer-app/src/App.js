
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Hour from "./components/Hour"
import Timer from "./components/Timer"
import Second from "./components/Second"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/hour' element={<Hour/>} ></Route>
          <Route path='/second' element={<Second/>} ></Route>
          <Route path='/timer' element={<Timer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;