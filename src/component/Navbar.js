import { NavLink } from "react-router-dom";

function Navbar(){
    return (
        <nav>
            <ul style={{margin:"1rem"}}>
                <NavLink style={{margin:"1rem"}} to="/" >Home</NavLink>
                <NavLink style={{margin:"1rem"}} to="/about">About</NavLink>
                <NavLink style={{margin:"1rem"}} to="/products">Product</NavLink>
            </ul>
        </nav>
    )
} 

export default Navbar;