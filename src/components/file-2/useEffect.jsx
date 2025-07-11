import { useEffect, useState } from 'react';
import ShowOrHide from './showOrHide';
function UseEffect(){
    let [count, setCount] = useState(0);
    let [data, setData] = useState(0);
    let [display, setDisplay] = useState(true);
     
   
    return(
        
        <div style={{display:"flex", gap:"10px", border: '5px solid pink', padding:'20px', width:'400px', borderRadius:'20px'}}>
            
            <button style={{background:'pink', color:'red', border:'2px solid red',borderRadius:'7px', cursor:'pointer', padding:'10px 20px'}} onClick={()=>setCount(++count)}>Counter</button>        
            <button style={{background:'pink', color:'red', border:'2px solid red',borderRadius:'7px', cursor:'pointer', padding:'10px 20px'}} onClick={()=>setData(++data)}>Data</button>  
            <button style={{background:'pink', color:'red', border:'2px solid red',borderRadius:'7px', cursor:'pointer', padding:'10px 20px'}}  onClick={()=>setDisplay(!display)}>{display? 'Hide': 'Show'}</button>      
            {
             display? <ShowOrHide count={count} data={data}/>: null    
            }
        </div>
    )
}
export default UseEffect;