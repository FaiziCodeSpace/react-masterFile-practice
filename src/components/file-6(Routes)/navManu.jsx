import { NavLink, Outlet } from "react-router";

export default function NavManu(){
    return(<>
        <NavLink to={'/home'}>Go to home Page</NavLink>
    <ul style={{display:'flex', gap: '20px'}}>
        <NavLink to={'business'}>BUSINESS</NavLink>
        <NavLink to={'college'}>COLLEGE</NavLink>
        <NavLink to={'details'}>DETAILS</NavLink>
    </ul>
        <Outlet/>
    </>)
}