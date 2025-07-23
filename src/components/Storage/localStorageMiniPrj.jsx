import { useState } from "react"

export default function RGBbox(){
    const colors = JSON.parse(localStorage.getItem('colors'));
    const [r, setR] = useState(colors && colors?colors.r:0);
    const [g, setG] = useState(colors && colors?colors.g:0);
    const [b, setB] = useState(colors && colors?colors.b:0);
    function saveColors(){
        localStorage.setItem('colors', JSON.stringify({r, g, b}));
    }
    return(<>
        <div className="Design-box">
            <div style={{background:'rgb('+r+','+g+','+b+')' , height:'30vh', border:'1px solid black'}}></div>
            <input type="range" value={r} onChange={(e)=>setR(e.target.value)} name="red" min={0} max={255} />
            <input type="range" value={g} onChange={(e)=>setG(e.target.value)} name="green" min={0} max={255} />
            <input type="range" value={b} onChange={(e)=>setB(e.target.value)} name="blue" min={0} max={255} />
            <button onClick={saveColors}>SAVE</button>
        </div>
    </>)
}