import { useState } from "react";
import { NavLink} from "react-router-dom";
 
function Navbar(){
    const [isOpen, setIsOpen]= useState(false);

    function closeMenu(){
        setIsOpen(false);
    }

    return(
        <nav className="navber">
            <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
            learn<span>Hub</span>
            </NavLink>
            <button className="navbar-toggle"onClick={()=>setIsOpen(!isOpen)}>
            |||
            </button>
        <div className={`navbar-links ${isOpen?"open": ""}`}>
        <NavLink to="/"onClick={closeMenu} end>Home</NavLink>
        <NavLink to="/courses" onClick={closeMenu}>Courses</NavLink>
        <NavLink to="/students" onClick={closeMenu}>Students</NavLink>
         <NavLink to="/about" onClick={closeMenu}>About</NavLink>
         <NavLink to="/contect" onClick={closeMenu}>Contect</NavLink>
         <NavLink to="/register" onClick={closeMenu} className="btn btn-primary btn-small">Register</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;