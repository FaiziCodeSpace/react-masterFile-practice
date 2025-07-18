import { useState } from "react"
import { NavLink } from "react-router";

export default function PostOnAPI(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [urlSelect, setUrl] = useState();

    async function post(){
        const url = urlSelect == 'first'?'http://localhost:3000/users':'http://localhost:8000/users';
        let res = await fetch(url, {
            method: 'Post',
            body: JSON.stringify({name, email, age})
        })
        res = await res.json()
        if(res){
            alert('User Added!')
        }
    }

    return(<>
        
        <form className="post-Form">
            <select onChange={(e)=>setUrl(e.target.value)} name="url" id="url">
                <option value="local">Select URL</option>
                <option value="first">http://localhost:3000/users</option>
                <option value="second">http://localhost:8000/users</option>
            </select>
            <input cla type="text" value={name} onChange={(e)=>setName(e.target.value)} name="username" placeholder="Username"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email"/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} name="age" placeholder="Age"/>
            <button type="submit" onClick={post}>Submit</button>
        </form>
     <NavLink to={"/userslist"}>Users</NavLink>
        
    </>)

}