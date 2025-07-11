import { Link, useParams } from "react-router"

export default function FruitDetails(){
    const fruitNum = useParams();
    return(<>
         <h1 style={{color:"green"}}>Fruits: {fruitNum.id}</h1>

         <Link to={'/fruits'}>Back</Link>
    </>)
}