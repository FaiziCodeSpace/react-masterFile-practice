import { NavLink, Route, Routes } from "react-router";
import IntegrateJSONServerAPIAndLoader from "./mockAPIFetch";
import PostOnAPI from "./post";
import EditUser from "./edit";

export default function Navigator() {
  return (
    <>
      <ul className="navigator">
        <NavLink className={"n-nav"} to={"/userslist"}>Users</NavLink>
        <NavLink className={"n-nav"} to={"/newUser"}>New User</NavLink>
      </ul>
      <Routes>
        <Route path="/userslist" element={<IntegrateJSONServerAPIAndLoader />}/>
        <Route path="/newUser" element={<PostOnAPI />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}
