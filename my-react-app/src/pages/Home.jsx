import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div> 
            <div className="home-container">
                <h1>Bringing Flavor to Your Fingertips: Where Every Recipe Tells a Story!</h1>
                <p>Discover endless culinary inspirations! From savory classics to sweet surprises, 
                    find your perfect recipe in a snap. Cooking made fun, easy, and delicious!</p>
            </div>

      
            <Link className="home-find-button" to="/recipes">Discovery your recipes</Link>
            
        </div>
    )
};