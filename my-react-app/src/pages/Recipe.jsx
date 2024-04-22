import React, { useEffect, useState } from "react";
import { getFood, fetchImageUrl } from "../api";

export default function Recipe() {
    const [foods, setFoods] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
    
    useEffect(() => {
        fetch("/api/foods")
            .then(res => res.json())
            .then(data => setFoods(data.foods))
    }, []);

    useEffect(() => {
        async function getImages() {
            const accessKey = 'whsYOuypaVpkrvfwc7pgpolPynK--VUeVeY9gpQiIJQ';
            const urls = {} //object for storing
            for (const food of foods) {
                // Iterate through each food item in the foods array
                const query = food.name; // Get the name of the current food item
                const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
                // Construct the API URL for fetching images based on the food name and Unsplash API access key
            
                try {
                    const url = await fetchImageUrl(apiUrl); // Call fetchImageUrl function to fetch the image URL
                    urls[food.id] = url // Store the fetched image URL in the urls object with the food id as the key
                } catch (error) {
                    console.error('Error fetching image:', error)
                }
            }
            setImageUrls(urls)
        }
        if (foods.length > 0) {
            getImages();
        }
    }, [foods]);

    const foodElements = foods.map(food => (
        <div key={food.id} className="food-tile">
            {imageUrls[food.id] ? (
                <img src={imageUrls[food.id]} alt={food.name} width={250}/>
            ) : (
                <p>Loading...</p>
            )}
            <div>
                <h3>{food.name}</h3>
                <p>{food.cuisine}</p>
            </div>
        </div>
    ));

    return (
        <div>
            {foodElements}
        </div>
    );
}


