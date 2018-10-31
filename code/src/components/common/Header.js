import React from 'react'
import { Link } from 'react-router-dom'

const Header=()=>{
    return(
        <header>
    <nav>
            <Link  exact to="/" >Books</Link>
            {" | "}
            <Link to="/authors" > Authors</Link>
            {" | "}
            <Link to="/publishers" > Publishers</Link>
        </nav>
        </header>
    );
};
export default Header;