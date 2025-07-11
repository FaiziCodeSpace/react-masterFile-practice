import { NavLink, Outlet } from "react-router";
import './css/navbar.css';

export default function Navbar(){
    return(<div>

            <ul className="navbar">
                <NavLink  className={({isActive})=>isActive?'isActive link':'link'} to="/home">HOME</NavLink>
                <NavLink className={'link'} to="/study">STUDY</NavLink>
                <NavLink className={'link'} to="/us/contact">CONTACT US</NavLink>
                <NavLink className={'link'} to="/us/about">ABOUT US</NavLink>
                <NavLink className={'link'} to="/manu">Manu</NavLink>
                <NavLink className={'link'} to="/fruits">fruits</NavLink>
                <NavLink className={'link'} to="/fruits/list">Link</NavLink>
            </ul>
        <Outlet/>
    </div>)
}