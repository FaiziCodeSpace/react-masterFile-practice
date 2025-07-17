import { useState } from "react"

export default function PostOnAPI(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();

    async function post(){
        const url = 'http://localhost:3000/users';
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
            <input cla type="text" value={name} onChange={(e)=>setName(e.target.value)} name="username" placeholder="Username"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email"/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} name="age" placeholder="Age"/>
            <button type="submit" onClick={post}>Submit</button>
        </form>
    </>)
}