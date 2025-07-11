import { useState } from "react";
import Province from "./province";
import { NofBuildings } from "./context";

export default function Country(){
    const [buildings, setBuildings] = useState(10);
    return(<div style={{padding: "20px", background:'blue'}}>

    <h1>Country</h1>
    
    <h1>Context API</h1>
    <NofBuildings.Provider value={buildings}>
        <select value={buildings} onChange={(e)=>setBuildings(e.target.value)}>
            <option value="">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
        </select>
        <button onClick={()=>setBuildings('')}>Clear</button>
        <Province/>
    </NofBuildings.Provider>
    
    </div>)
}