import { useState } from "react";

function RuntimeLoader(){
    const [writer, setWriter] = useState();
    return(
        <div>
            <input type="text" value={writer} onChange={(e)=>setWriter(e.target.value)}/>
            <h1>{writer}</h1>
            <button onClick={()=>setWriter('')}>Reset!</button>
        </div>
    )
}

export default RuntimeLoader;