import './App.css';

import {Routes, Route} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import OrderSummary from './component/OrderSummary';
import NoMatch from './component/NoMatch';
import { Products } from './component/Products';
import { FeaturedProducts } from './component/FeaturedProducts';
import { NewProducts } from './component/NewProducts';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='ordersummary' element={<OrderSummary/>}/>
        
        <Route path='products' element={<Products/>}>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='*' element={<NoMatch/>}/>

      </Routes>
    </>
  );
}

export default App;
