import { Link, Outlet } from "react-router-dom"

  
 export const Products = () => {
   return (
    <>
     <div>
        <h3>products</h3>
        <input type='search' placeholder="Search Product"/>
     </div>
     <nav>
        <Link to='featured' style={{margin:"1rem"}}>Featured</Link>
        <Link to='new' style={{margin:"1rem"}}>New</Link>
     </nav>
     <Outlet/>    {/*react still don't know that where should have to render, for that we give outlet.*/}
    </>
   )
 }