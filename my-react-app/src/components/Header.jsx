import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">COOKINATOR</Link>
            <nav>
                <NavLink 
                    to="/recipes"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Recipes
                </NavLink>
                <NavLink 
                    to="/favorites"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Favorites
                </NavLink>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
            </nav>
        </header>
    )
}