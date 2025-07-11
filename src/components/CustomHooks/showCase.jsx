import useToggle from "./customHook"

function ShowToggle(){
    const [display, setDisplay] = useToggle();


    return(
        <>
        <button onClick={setDisplay}>Toggle</button>
        <button onClick={()=>setDisplay(false)}>Off</button>
        <button onClick={()=>setDisplay(true)}>On</button>
        {
            display? <h1>Hello there!</h1>: null
        }
        </>
    )
}

export default ShowToggle;