import {NavLink} from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul className="navbar">
            <li><NavLink to="/" className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Home</NavLink>
            </li>
            <li><NavLink to="/about" className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >About</NavLink>
            </li>
            <li><NavLink to="/contact" className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Contact</NavLink>
            </li>
            <li><NavLink to="/blog" className="navbar-link"
                style={({isActive})=>{return{color: isActive?'lightgreen':''}}}
                >Blog</NavLink>
            </li>
            </ul>
        </div>
    )
};

export default Navbar;