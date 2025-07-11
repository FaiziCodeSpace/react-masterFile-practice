import { useRef } from "react"

function Testing(){
    const color = useRef(null);
    function changeColor(){
        color.current.style.color='red'
    }
    return(
        <>
            <div>
                <h1 ref={color}>Hello there</h1>
                <button onClick={changeColor}></button>
            </div>
        </>
    )
}

export default Testing;