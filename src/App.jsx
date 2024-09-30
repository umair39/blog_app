
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home/index';

function App() {
  return (
    <>
    <div className='container'>

     <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             
           </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
