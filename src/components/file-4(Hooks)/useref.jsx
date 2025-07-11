import { useRef } from "react";

function UnControllableComponents(){

    function submit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;
        console.log(name, password);
    }
    
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    function submit2(e){
        e.preventDefault();        
        console.log(nameRef.current.value, passwordRef.current.value);
    }

    return(
        <>
            <form onSubmit={submit}>
                <input type="text" id="name" />
                <input type="password" id="password" />
                <button type="submit">SUBMIT</button>
            </form>
<br /><hr /><br />
            <form onSubmit={submit2}>
                <input type="text" ref={nameRef} id="name" />
                <input type="password" ref={passwordRef} id="password" />
                <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default UnControllableComponents;