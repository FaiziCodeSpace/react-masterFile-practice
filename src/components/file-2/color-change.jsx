import { useState } from "react";
import Clock from "./clock";

function Cc(){
    const [colors, setChangeColor] = useState('orange');
    return(
        <div>
            <select onChange={(e)=>{setChangeColor(e.target.value)}}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
            </select>
            <Clock color={colors}/>
        </div>
    )
}
export default Cc;