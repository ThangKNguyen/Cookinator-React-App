// import React, { useState, useEffect } from "react";

// export default function Favorite() {
//     const [favoriteFoods, setFavoriteFoods] = useState([]);
//     const [food,setFood] = useState(null)

//     useEffect(() => {
//         // Retrieve favorites from local storage
//         const storedFavorites = localStorage.getItem('favorites');
//         if (storedFavorites) {
//             setFavoriteFoods(JSON.parse(storedFavorites));
//         }
//     }, []);

//     useEffect(() => {
//         fetch(`/api/foods/${favoriteFoods[0]}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then(data => setFood(data.foods))
//             .catch(err => setError(err.message))
        
//     },)

//     console.log(favoriteFoods) 
//     return (
//         <div>
//             <h1>This is the favorite page</h1>
//             <ul>
//                 {favoriteFoods.map(favorite => (
//                     <li key={favorite.id}> {food.name} </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }