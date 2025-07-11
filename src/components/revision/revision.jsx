import { useState } from "react"
import Counting from "./counting";
import { useFormStatus } from "react-dom";

function Revision(){
    const [username, setUsername] = useState('');
    const [FavFruits, SetFavFruits] = useState([]);
    const [gender, setGender] = useState('Male');
    let [counter, setCounter] = useState(0);
    let [data, setData] = useState(0);
    const [display, setDisplay] = useState(true);

    function checking(e){
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            SetFavFruits([...FavFruits, e.target.value])
        }else{
            SetFavFruits([...FavFruits.filter(i=>i!=e.target.value)])
        }
    }

    async function submitting(){
        await new Promise(res=>setTimeout(res, 2000))
    }

    function AnyCom(){
        const {pending} = useFormStatus();
        return(
            <>
                <input type="email" />
                <input type="password" />
                <button disabled={pending}>Submit</button>
            </>
        )
    }

    return(
        <>
            <form action="">
                <input value={username} type="text" onChange={(e)=>setUsername(e.target.value)}/>
        <hr />
                <input type="checkbox" onChange={checking} value='Apple'/>Apple <br />
                <input type="checkbox" onChange={checking} value='Banana'/>Banana <br />
                <input type="checkbox" onChange={checking} value='Mango'/>Mango <br />
                <input type="checkbox" onChange={checking} value='Orange'/>Orange <br />

            </form>
            <h1>{username}</h1>
            <h1>{FavFruits.join(' | ')}</h1>
            <hr />

            Male:<input type="radio" checked={gender=='Male'} onChange={(e)=>setGender(e.target.value)} value='Male' name="gender" /> <br />
            Female:<input type="radio" checked={gender=='Female'} onChange={(e)=>setGender(e.target.value)} value='Female' name="gender" />
            <h1>{gender}</h1>

            <hr />
            <button onClick={()=>setDisplay(!display)}>Display {display?'Off': 'On'}</button>
            <br />
            <button disabled={!display} onClick={()=>setCounter(++counter)}>Increase Counter:</button>
            <br /><br />
            <button disabled={!display} onClick={()=>setData(++data)}>Increase Counter:</button>
            
            {
            display?<Counting counter={counter} data={data}/>:null
            }
            <hr />
            <form action={submitting}>
                <AnyCom/>
            </form>


            

        </>
    )
}

export default Revision;