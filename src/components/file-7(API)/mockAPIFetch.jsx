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
      <h1>Integrate JSON Server API And Loader</h1>
      {
      !loading?
      userData.map((user) => (
        <ul key={user.id} className="userList">
          <li>{user.id}</li>
          <li>{user.firstName}</li>
          <li>{user.age}</li>
        </ul>
      ))
      :
      <h1>You gotta wait Mister...</h1>
    
    }
    
    </>
  );
}
