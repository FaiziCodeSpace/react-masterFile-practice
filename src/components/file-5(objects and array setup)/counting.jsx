import { useEffect } from "react";

function Counting({counter, data}){


    useEffect(()=>{
        console.log('Mount');
    },[])
    
    useEffect(()=>{
        console.log('Update');
    },[counter, data])

    
    useEffect(()=>{
        return()=>{
            console.log('unMount');
        }
    }, [])
    return(
        <>
        <h1>Counter: {counter}</h1>
        <h1>Data: {data}</h1>
        </>
    )
}
export default Counting;