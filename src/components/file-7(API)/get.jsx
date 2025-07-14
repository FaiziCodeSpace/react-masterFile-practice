import { useEffect, useState } from "react";

export default function GetTheAPI() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  async function FetchData() {
    const url = "https://dummyjson.com/users";
    let res = await fetch(url);
    let data = await res.json();
    setUserData(data.users);
  }

  return (
    <>
      <ul className="userList">
        <li>ID</li>
        <li>FIRST NAME</li>
        <li>AGE</li>
      </ul>
      {userData &&
        userData.map((user) => (
          <ul className="userList">
            <li>{user.id}</li>
            <li>{user.firstName}</li>
            <li>{user.age}</li>
          </ul>
        ))}
    </>
  );
}
