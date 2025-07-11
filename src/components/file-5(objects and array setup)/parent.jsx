import { useState } from "react"
import Typer from "./child-1";
import Page from "./child-2";

function Parent(){
    const [typer, setTyper] = useState('');
    return(
        <div>
            <Typer fetcher={setTyper}/>
            <Page data={typer}/>
        </div>
    )
}

export default Parent;
