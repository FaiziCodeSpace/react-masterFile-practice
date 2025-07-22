import { lazy, Suspense, useState } from "react"

const MockComp = lazy(()=>import('./mockComponent'));


export default function LazyLoading(){
    const [display, setDisplay] = useState(false);
    return(<>
        {
            display? <Suspense fallback={<img style={{width:'40px'}} src="/loader.gif" alt="loading"/>}><MockComp/></Suspense>:null
        }
        <button onClick={()=>setDisplay(!display)}>TOGGLE</button>
        </>)
}