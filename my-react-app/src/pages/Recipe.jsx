import React, { useEffect, useState } from "react";
import { fetchImageUrl } from "../api";
import { Link } from "react-router-dom";
import { getAccessKey } from "../api"
export default function Recipe() {
    const [originalFoods, setOriginalFoods] = useState([]); // Keep original food data
    const [foods, setFoods] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
    const [search, setSearch] = useState("");
    const [searchPerformed, setSearchPerformed] = useState(false); // Track if search has been performed
    const [favorites, setFavorites] = useState(() => {
        // Retrieve favorites from localStorage on component mount
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        // Update favorites in localStorage whenever it changes
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Function to fetch food data
    const fetchFoodData = async () => {
        try {
            const res = await fetch("/api/foods");
            const data = await res.json();
            setOriginalFoods(data.foods); // Store original food data
            setFoods(data.foods);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    useEffect(() => {
        fetchFoodData(); // Fetch data about the food initially
    }, []);

    useEffect(() => {
        async function getImages() {
            const accessKey = getAccessKey;
            const urls = {};
            for (const food of foods) {
                const query = food.name;
                const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
                try {
                    const url = await fetchImageUrl(apiUrl);
                    urls[food.id] = url;
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }
            setImageUrls(urls);
        }

        if (foods.length > 0) {
            getImages();
        }
    }, [foods]);

    const handleSearch = async () => {
        if (search) {
            try {
                const searchedFoods = originalFoods.filter(item =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.mainIngredient.toLowerCase().includes(search.toLowerCase()) ||
                    item.cuisine.toLowerCase().includes(search.toLowerCase())
                );
                setFoods(searchedFoods);
                setSearchPerformed(true); // Set searchPerformed to true
            } catch (error) {
                console.error('Error filtering food data:', error);
            }
            setSearch(""); // Clear the search after finishing
        }
    };

    const toggleFavorite = (foodId) => {
        // Check if the foodId is already in favorites
        const index = favorites.indexOf(foodId);
        if (index !== -1) {
            // Remove from favorites if already favorited
            const updatedFavorites = [...favorites];
            updatedFavorites.splice(index, 1);
            setFavorites(updatedFavorites);
        } else {
            // Add to favorites if not already favorited
            setFavorites([...favorites, foodId]);
        }
    };

    const foodElements = foods.map(food => {
        const isFavorite = favorites.includes(food.id); // Check if the food is favorited
        return (
            <div key={food.id} className="food-tile" style={{ position: 'relative' }}>
                <Link to={`/recipes/${food.id}`}>
                    {imageUrls[food.id] ? (
                        <img src={imageUrls[food.id]} alt={food.name} width={300} height={250} />
                    ) : (
                        <p>Loading...</p>
                    )}
                    <div>
                        <h3>{food.name}</h3>
                        <p className="food-cuisine">{food.cuisine}</p>
                        <p>Main Ingredient: {food.mainIngredient}</p>
                    </div>
                </Link>
                <button className="button-44" role="button" onClick={() => toggleFavorite(food.id)} style={{ position: 'absolute', top: 0, right: 0 }}>
                    {isFavorite ? "Favorited ★" : "Favorite"}
                </button>
            </div>
        );
    });

    console.log(getAccessKey)
    return (
        <div>
           
           <div style={{ margin: '20px', paddingLeft: '300px' }}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Food"
                style={{
                    height: '76px',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '4px',
                    width: window.innerWidth >= 1024 ? '800px' : '350px',
                    backgroundColor: '#fff',
                    borderRadius: '40px',
                    padding: '0 16px',
                    boxSizing: 'border-box'
                }}
            />
            <button
                className="button-1 search-btn"
                onClick={handleSearch}
                style={{ marginLeft: '20px' }}
            >
                Search
            </button>
        </div>
            {searchPerformed && (
                <div className="food-list">
                    {foodElements}
                </div>
            )}
        </div>
    );
}




