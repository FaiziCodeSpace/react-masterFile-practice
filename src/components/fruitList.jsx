import { Link } from "react-router"

export default function FruitList(){
    const list = [
        {id:1, fruits:'Apple'},
        {id:2, fruits:'Banana'},
        {id:3, fruits:'Orange'},
        {id:4, fruits:'Mango'},
        {id:5, fruits:'Grapes'},
    ]
    return(
        <div style={{margin:'20px'}}>
        <h1 style={{color:"green"}}>Fruits</h1>
        {
            list.map((f)=>(
                <h3><Link to={"/fruits/"+f.id+"/"+f.fruits} style={{color:"red"}}>{f.fruits}</Link></h3>
            ))
        }
        </div>
    )
}