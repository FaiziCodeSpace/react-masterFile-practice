import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function EditUser(){
    const {id} = useParams();
    const [name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigator = useNavigate();
    const url = "http://localhost:3000/users/"+id;
    
    useEffect(()=>{
        loadValues();
    },[])

    const loadValues= async()=>{
        let res = await fetch(url);
        res = await res.json();
        setUserName(res.name);
        setEmail(res.email);
        setAge(res.age);
    }

    const updateUser=async()=>{
        let res = await fetch(url,{
            method: 'Put',
            body: JSON.stringify({
                name,
                email,
                age
            })
        });
        res = await res.json();
        if(res){
            alert('User Updated!')
        }
        navigator('/userslist')


    }
    return(<>
      <h1 style={{textAlign: "center"}}>Edit User</h1>
        <form className="post-Form edit">
            <input type="text" value={name} onChange={(e)=>setUserName(e.target.value)} name="username" placeholder="Username"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  name="email" placeholder="Email"/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} name="age" placeholder="Age"/>
            <button type="button" onClick={updateUser}>Edit User</button>
        </form>
    </>)
}