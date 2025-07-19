import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function IntegrateJSONServerAPIAndLoader() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

    useEffect(()=>{
        setLoading(true);
        fetchApi();
    },[])

  function fetchApi() {
    
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
    setUserData(data)
    setLoading(false);
    });   
    
  }

  async function deleteUser(id){
    let res = await fetch("http://localhost:3000/users" + "/" + id, {
      method: 'delete'
    })
    res = await res.json();
    if(res){
      alert('User Deleted!')
    }
    fetchApi();
  }

  const editUser=(id)=>{
    navigator("/edit"+"/"+id)
  }

  return (
    <>
      <h1 style={{textAlign: "center"}}>Users list</h1>
        <ul className="userList">
        <li>ID</li>
        <li>FIRST NAME</li>
        <li>AGE</li>
        <li>Delete</li>
        <li>Edit</li>
      </ul>
      {
      !loading?
      userData.map((user) => (
        <ul key={user.id} className="userList">
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>
            <button onClick={()=>deleteUser(user.id)}>Delete</button>
          </li>
          <li>
            <button onClick={()=>editUser(user.id)}>Edit</button>
          </li>
        </ul>
      ))
      :(
        <div style={{display: 'flex', justifyContent:'center', marginTop: '70px'}}>
           <img src="/loader.gif" alt="Loading..." />
           <h1>Loading...</h1>
        </div>
  )
    
    }
    
    
    </>
  );
}
