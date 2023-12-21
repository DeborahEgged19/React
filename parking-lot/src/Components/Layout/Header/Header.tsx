import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Daniel Street</h1>
            <NavLink to="/"> Home Page</NavLink>|
            <NavLink to="/parkingList"> Parking List</NavLink>|
            <NavLink to="/about">About</NavLink>|
        </div>
    );
}

export default Header;
