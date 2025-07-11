import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0); 
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(++count)}}>UPDATE CONDITION</button>
            {
                count==0? <h1>Condition 0</h1>:
                count==1? <h1>Condition 1</h1>:
                count==2? <h1>Condition 2</h1>:
                count==3? <h1>Condition 3</h1>:
                <h1>Others Conditions</h1>
            }
        </div>
    )
}

export default Counter;