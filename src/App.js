import './App.css';

import {Routes, Route} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import OrderSummary from './component/OrderSummary';
import NoMatch from './component/NoMatch';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/ordersummary' element={<OrderSummary/>}/>
        <Route path='*' element={<NoMatch/>}/>

      </Routes>
    </>
  );
}

export default App;
