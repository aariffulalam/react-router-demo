import {useNavigate} from "react-router-dom"

function Home(){
    const navigate =  useNavigate()
    return (
        <>
        <h3>Home Page</h3>
        <button onClick={()=>{navigate('ordersummary')}}>Order Now</button>
        </>
    )
}

export default Home;