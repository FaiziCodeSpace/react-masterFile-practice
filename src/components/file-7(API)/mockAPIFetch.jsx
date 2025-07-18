import { useEffect, useState } from "react";

export default function IntegrateJSONServerAPIAndLoader() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <>
      <h1 style={{textAlign: "center"}}>Users list</h1>
      {
      !loading?
      userData.map((user) => (
        <ul key={user.id} className="userList">
          <li>{user.id}</li>
          <li>{user.firstName}</li>
          <li>{user.age}</li>
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
