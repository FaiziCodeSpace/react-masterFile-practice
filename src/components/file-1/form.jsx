import { useState } from "react";

function Forming(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    return(
        <div>
            <form action="">
                <input value={username} type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                <input value={password} type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                <button onClick={()=>{setUsername('');setPassword('');setEmail('')}}>Reset</button>
            </form>

            <h1>{username}</h1>
            <h1>{password}</h1>
            <h1>{email}</h1>

        </div>
    )
}

export default Forming;