import { useNavigate } from "react-router-dom";

function OrderSummary(){
    const navigate = useNavigate()
    return (
        <>
            <h3>Order confirmed !</h3>
        <button onClick={()=>{navigate(-1)}}>Go back</button>
        {/* this button will allow us to go back to the previous page. */}

        </>
    )
}

export default OrderSummary;