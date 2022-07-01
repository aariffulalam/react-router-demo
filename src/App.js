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
import { Users } from './component/Users';
import { UserDetails } from './component/UserDetails';
import { Admin } from './component/Admin';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='ordersummary' element={<OrderSummary/>}/>
        
        <Route path='products' element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>

        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>} />  {/*userId will not be integer only it could be string also.*/}
          <Route path='admin' element={<Admin/>}/> {/* react is so inteligent that in userId also can be admin but this component will be use not userDetails. */}
        </Route>
        
        <Route path='*' element={<NoMatch/>}/>

      </Routes>
    </>
  );
}

export default App;
