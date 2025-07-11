import { useEffect, useState } from "react";

function Clock({color}){
    const [timer, settimer] = useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        setInterval(() => {
            settimer(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    return(
        <div>
            <h1 style={{color:color}}>{timer}</h1>
        </div>
    )
}

export default Clock;