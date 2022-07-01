import {useNavigate} from "react-router-dom"

function Home(){
    const navigate =  useNavigate()
    return (
        <>
            <h3>Home Page</h3>
            <button onClick={()=>{navigate('ordersummary')}}>Order Now</button>
            {/* this replace will be remove the history if we will navigate to other page and wants to come back to this page this will not be come we will go to the google root page. */}
        </>
    )
}

export default Home;

