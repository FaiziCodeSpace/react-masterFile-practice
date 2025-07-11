import { useContext } from "react"
import { NofBuildings } from "./context"

export default function Town(){
    const buildingsCount = useContext(NofBuildings);
    return(<div style={{padding: "20px", background:'red'}}>
    <h1>Town</h1>
    <h1 style={{background: 'white'}}>Number of Buildings: {buildingsCount}</h1>
    
    </div>)
}