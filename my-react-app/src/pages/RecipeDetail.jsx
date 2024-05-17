import { fetchImageUrl } from "../api";
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { fetchData,youtubeOptions,getAccessKey } from "../api"

export default function RecipeDetail() {
    const params = useParams()
    const [food, setFood] = useState(null)
    const [error, setError] = useState(null)
    const [foodVideos, setFoodVideos] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    useEffect(() => {
        fetch(`/api/foods/${params.id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setFood(data.foods))
            .catch(err => setError(err.message))
        
    }, [params.id])

    useEffect(() => {
        if (!food) return;

        const getImages = async () => {
            
            const accessKey = getAccessKey
            const urls = {};

            const apiUrl = `https://api.unsplash.com/search/photos?query=${food.name}&client_id=${accessKey}`;
            
            try {
                const url = await fetchImageUrl(apiUrl);
                urls[food.id] = url; // Store the fetched image URL in the urls object with the food id as the key
            } catch (error) {
                console.error('Error fetching image:', error);
            }

            setImageUrls(urls);
        };

        getImages();
    }, [food]);

    useEffect(() => {
        if (!food) return;

        const fetchVideos = async () => {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            try {
                const foodVideosData = await fetchData(`${youtubeSearchUrl}/search?query=How to make ${food.name}`, youtubeOptions);
                setFoodVideos(foodVideosData.contents);
            } catch (err) {
                console.error('Error fetching videos:', err);
            }
        };

        fetchVideos();
    }, [food]);

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!food) {
        return <div>Loading...</div>
    }

    console.log(imageUrls)

    return (
        <div>
          <div className="food-info">
            <div className="image-container">
                {imageUrls[food.id] ? (
                    <img src={imageUrls[food.id]} alt={food.name} width={500} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="text-container">
                <h1>Here are information about {food.name}! </h1>
                <p>Cuisine: {food.cuisine}</p>
                <p>Main Ingredient: {food.mainIngredient}</p>
                <p>Other ingredients: {food.ingredients.join(", ")}</p>
                <p>Vegan friendly: {food.veganFriendly}</p>
                <p>Course type: {food.courseType}</p>
            </div>
        </div>





        <div style={{ textAlign: 'center' }}>
            <h1>Browse through some videos about {food.name}</h1>
        </div>
            {/* Render other food properties as needed */}

            <div className="food-video-container">
                {foodVideos?.slice(0, 3)?.map((item, index) => (
                <div className="food-video-wrapper" key={index}>
                    <a
                        className="food-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <div className="food-video-details">
                            <h2>{item.video.title}</h2>
                            <p>By: {item.video.channelName}</p>
                        </div>
                    </a>
        </div>
    ))}
</div>
        </div>
    )
}
