import { Link, NavLink } from "react-router-dom";
import "../../CSS/navbar.css"

export default function Navbar() {

    return (
        <>
            <div id="navbar">
                <div className="navbar-left">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <NavLink to="/login" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}