import { Fragment } from "react";

function Fragments(){
    return(
        <Fragment>
            <h1>Hello world</h1>
            <Testing/>
            <Testing/>
            <Testing/>
            <Testing/>
        </Fragment>
    )
}

function Testing(){
    return(
        <><span>Hey </span><b>there</b></>
    )
}
export default Fragments;