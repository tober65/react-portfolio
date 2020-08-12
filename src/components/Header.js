import React from "react"
import {Link} from "react-router-dom";

const Header = () => {
    return <div><Link to="/">Home</Link>
    <br />
    <Link to="/contact">Contact</Link>
    <br />
    <Link to="/portfolio">Portfolio</Link>
    <hr /></div>
}

export default Header;