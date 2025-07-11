import { useState } from "react";

// check 
function Routine(){
    const [routine, setRoutine] = useState([]);
    const handleRoutine = (e) => {
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setRoutine([...routine, e.target.value]);
        }else{
            setRoutine([...routine.filter(i=>i!=e.target.value)]);
        }
    }
    return(
        <div>
            <h1>ROUTINE</h1>
            <input onChange={handleRoutine} type="checkbox" id="brush" value='Brush'/>
            <label htmlFor="brush">Brush</label>
            <br />
            <br />
            <input onChange={handleRoutine} type="checkbox" id="eat" value='Eat'/>
            <label htmlFor="eat">Eat</label>
            <br />
            <br />
            <input onChange={handleRoutine} type="checkbox" id="gym" value='Gym'/>
            <label htmlFor="gym">Gym</label>
            <br />
            <br />
            <input onChange={handleRoutine} type="checkbox" id="gaming" value='Gaming'/>
            <label htmlFor="gaming">Gaming</label>
            <h1>{routine.toString()}</h1>
        </div>
    )
}

export default Routine;