// App.jsx
import { useEffect, useState } from "react";


function ShowOrHide({count, data}) {
  const [show, setShow] = useState(true);

  

  useEffect(()=>{
    console.log('Mount');
  },[])

  useEffect(()=>{
    console.log('Update');
  },[count, data])

  useEffect(()=>{
    return () =>{
        console.log('unMount')
    }
  },[])


  return (
    <div>
        <h1>Counter:{count}</h1>
        <h1>Data: {data}</h1>
    </div>
  );
}
export default ShowOrHide;