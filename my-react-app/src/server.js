import { createServer, Model } from "miragejs"


createServer({
    models: {
        foods: Model,
    },

    seeds(server) {
        server.create("food", { 
            id: "1", 
            name: "Spaghetti Bolognese",
            cuisine: "Italian",
            mainIngredient: "Beef",
            ingredients: ["Ground beef", "Onion", "Garlic", "Tomato sauce", "Spaghetti pasta", "Parmesan cheese", "Basil", "Oregano", "Salt", "Pepper"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "2", 
            name: "Pad Thai",
            cuisine: "Thai",
            mainIngredient: "Shrimp",
            ingredients: ["Rice noodles", "Shrimp", "Bean sprouts", "Green onions", "Garlic", "Eggs", "Peanuts", "Lime", "Fish sauce", "Tamarind paste", "Sugar", "Chili flakes"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "3", 
            name: "Tiramisu",
            cuisine: "Italian",
            mainIngredient: "Coffee",
            ingredients: ["Ladyfingers", "Mascarpone cheese", "Eggs", "Sugar", "Coffee", "Cocoa powder", "Rum (optional)", "Vanilla extract"],
            courseType: "Dessert",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "5", 
            name: "Margherita Pizza",
            cuisine: "Italian",
            mainIngredient: "Cheese (Mozzarella)",
            ingredients: ["Pizza dough", "Tomato sauce", "Fresh basil leaves", "Extra virgin olive oil", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "6", 
            name: "Hummus",
            cuisine: "Middle Eastern",
            mainIngredient: "Chickpeas",
            ingredients: ["Chickpeas", "Tahini", "Lemon juice", "Garlic", "Olive oil", "Salt", "Cumin", "Paprika"],
            courseType: "Appetizer",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "7", 
            name: "Caesar Salad",
            cuisine: "American",
            mainIngredient: "Chicken",
            ingredients: ["Romaine lettuce", "Grilled chicken breast", "Croutons", "Parmesan cheese", "Caesar dressing"],
            courseType: "Appetizer",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "8", 
            name: "Mushroom Risotto",
            cuisine: "Italian",
            mainIngredient: "Rice",
            ingredients: ["Arborio rice", "Mushrooms", "Onion", "Garlic", "Vegetable broth", "White wine", "Butter", "Parmesan cheese", "Parsley", "Salt", "Pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "9", 
            name: "Guacamole",
            cuisine: "Mexican",
            mainIngredient: "Avocado",
            ingredients: ["Avocados", "Tomato", "Onion", "Cilantro", "Lime juice", "Salt", "Pepper", "Garlic", "Jalapeno (optional)"],
            courseType: "Appetizer",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "10", 
            name: "Beef Wellington",
            cuisine: "British",
            mainIngredient: "Beef",
            ingredients: ["Beef fillet", "Puff pastry", "Mushrooms", "Foie gras (optional)", "Duxelles (mixture of mushrooms, shallots, and herbs)", "Egg wash"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "11", 
            name: "Tom Yum Soup",
            cuisine: "Thai",
            mainIngredient: "Shrimp",
            ingredients: ["Shrimp", "Lemongrass", "Kaffir lime leaves", "Galangal", "Chili peppers", "Mushrooms", "Tomatoes", "Fish sauce", "Lime juice", "Cilantro"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "12", 
            name: "Falafel",
            cuisine: "Middle Eastern",
            mainIngredient: "Chickpeas",
            ingredients: ["Chickpeas", "Onion", "Garlic", "Cilantro", "Parsley", "Cumin", "Coriander", "Flour", "Baking powder", "Salt", "Pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "13", 
            name: "Chocolate Cake",
            cuisine: "International",
            mainIngredient: "Chocolate",
            ingredients: ["Flour", "Sugar", "Cocoa powder", "Baking powder", "Baking soda", "Eggs", "Butter", "Milk", "Vanilla extract", "Salt", "Powdered sugar (for dusting)"],
            courseType: "Dessert",
            veganFriendly: "No"
          });

          server.create("food", { 
            id: "14", 
            name: "Chicken Tikka Masala",
            cuisine: "Indian",
            mainIngredient: "Chicken",
            ingredients: ["Chicken thighs", "Tomato sauce", "Yogurt", "Ginger", "Garlic", "Onion", "Garam masala", "Turmeric", "Cumin", "Coriander", "Chili powder", "Cream"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "15", 
            name: "Caprese Salad",
            cuisine: "Italian",
            mainIngredient: "Cheese (Mozzarella)",
            ingredients: ["Tomatoes", "Fresh mozzarella cheese", "Fresh basil leaves", "Extra virgin olive oil", "Balsamic vinegar", "Salt", "Black pepper"],
            courseType: "Appetizer",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "16", 
            name: "Pho",
            cuisine: "Vietnamese",
            mainIngredient: "Beef",
            ingredients: ["Beef broth", "Rice noodles", "Beef slices", "Onion", "Green onions", "Bean sprouts", "Thai basil", "Lime", "Chili sauce", "Hoisin sauce"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "17", 
            name: "Tofu Stir-Fry",
            cuisine: "Asian",
            mainIngredient: "Tofu",
            ingredients: ["Extra firm tofu", "Broccoli", "Bell peppers", "Carrots", "Snap peas", "Garlic", "Ginger", "Soy sauce", "Sesame oil", "Rice vinegar", "Cornstarch"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "18", 
            name: "Greek Salad",
            cuisine: "Greek",
            mainIngredient: "Feta cheese",
            ingredients: ["Tomatoes", "Cucumbers", "Red onion", "Kalamata olives", "Feta cheese", "Extra virgin olive oil", "Red wine vinegar", "Dried oregano", "Salt", "Black pepper"],
            courseType: "Appetizer",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "19", 
            name: "Ratatouille",
            cuisine: "French",
            mainIngredient: "Vegetables (e.g., eggplant, zucchini)",
            ingredients: ["Eggplant", "Zucchini", "Tomatoes", "Bell peppers", "Onion", "Garlic", "Herbs de Provence", "Olive oil", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "20", 
            name: "Pancakes",
            cuisine: "American",
            mainIngredient: "Flour",
            ingredients: ["All-purpose flour", "Milk", "Eggs", "Butter", "Sugar", "Baking powder", "Salt", "Vanilla extract", "Maple syrup (for serving)"],
            courseType: "Dessert",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "22", 
            name: "Miso Soup",
            cuisine: "Japanese",
            mainIngredient: "Tofu",
            ingredients: ["Dashi (Japanese soup stock)", "Tofu", "Seaweed", "Green onions", "Miso paste"],
            courseType: "Appetizer",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "23", 
            name: "Pesto Pasta",
            cuisine: "Italian",
            mainIngredient: "Basil",
            ingredients: ["Pasta", "Basil", "Garlic", "Pine nuts", "Parmesan cheese", "Olive oil", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "No"
          });
        
          server.create("food", { 
            id: "24", 
            name: "Chicken Curry",
            cuisine: "Indian",
            mainIngredient: "Chicken",
            ingredients: ["Chicken", "Curry paste", "Coconut milk", "Onion", "Garlic", "Ginger", "Tomatoes", "Bell peppers", "Carrots", "Potatoes", "Cilantro", "Rice (for serving)"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "25", 
            name: "Vegan Buddha Bowl",
            cuisine: "International",
            mainIngredient: "Various vegetables and grains",
            ingredients: ["Quinoa", "Chickpeas", "Roasted sweet potatoes", "Avocado", "Spinach", "Cucumber", "Tomatoes", "Carrots", "Tahini dressing", "Lemon wedges", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "26", 
            name: "Tacos",
            cuisine: "Mexican",
            mainIngredient: "Beef (or choice of protein)",
            ingredients: ["Tortillas", "Ground beef", "Lettuce", "Tomatoes", "Onion", "Cheese", "Sour cream", "Guacamole", "Salsa", "Cilantro", "Lime wedges"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "27", 
            name: "Fried Rice",
            cuisine: "Asian",
            mainIngredient: "Rice",
            ingredients: ["Cooked rice", "Vegetables (e.g., carrots, peas, bell peppers)", "Eggs", "Soy sauce", "Sesame oil", "Garlic", "Green onions", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "28", 
            name: "Chicken Alfredo",
            cuisine: "Italian",
            mainIngredient: "Chicken",
            ingredients: ["Chicken breasts", "Fettuccine pasta", "Heavy cream", "Parmesan cheese", "Garlic", "Butter", "Salt", "Black pepper", "Parsley (for garnish)"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "29", 
            name: "Gyoza",
            cuisine: "Japanese",
            mainIngredient: "Pork",
            ingredients: ["Ground pork", "Cabbage", "Garlic", "Ginger", "Soy sauce", "Sesame oil", "Gyoza wrappers", "Green onions", "Sake (optional)", "Rice vinegar", "Salt", "Black pepper"],
            courseType: "Appetizer",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "30", 
            name: "Margarita",
            cuisine: "International",
            mainIngredient: "Tequila",
            ingredients: ["Tequila", "Triple sec", "Lime juice", "Simple syrup", "Salt (for rimming)", "Lime wedge (for garnish)", "Ice"],
            courseType: "Beverage",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "31", 
            name: "Vegetable Lasagna",
            cuisine: "Italian",
            mainIngredient: "Various vegetables",
            ingredients: ["Lasagna noodles", "Tomato sauce", "Ricotta cheese", "Mozzarella cheese", "Parmesan cheese", "Zucchini", "Yellow squash", "Bell peppers", "Spinach", "Onion", "Garlic", "Olive oil", "Salt", "Black pepper"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "32", 
            name: "Beef Stew",
            cuisine: "International",
            mainIngredient: "Beef",
            ingredients: ["Beef stew meat", "Potatoes", "Carrots", "Celery", "Onion", "Garlic", "Beef broth", "Tomato paste", "Worcestershire sauce", "Bay leaves", "Thyme", "Salt", "Black pepper", "Flour (for thickening)"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "33", 
            name: "Miso Eggplant",
            cuisine: "Japanese",
            mainIngredient: "Eggplant",
            ingredients: ["Eggplant", "Miso paste", "Mirin", "Soy sauce", "Sake", "Sugar", "Green onions (for garnish)"],
            courseType: "Main",
            veganFriendly: "Yes"
          });

          server.create("food", { 
            id: "34", 
            name: "Banh Mi",
            cuisine: "Vietnamese",
            mainIngredient: "Baguette",
            ingredients: ["Baguette", "Pork (or chicken, tofu)", "Pickled carrots", "Pickled daikon", "Cucumber", "Cilantro", "Jalapeno", "Mayonnaise", "Soy sauce", "Lime", "Garlic", "Sugar"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "35", 
            name: "Chicken Shawarma",
            cuisine: "Middle Eastern",
            mainIngredient: "Chicken",
            ingredients: ["Chicken thighs", "Pita bread", "Tahini sauce", "Garlic sauce", "Pickled vegetables", "Lettuce", "Tomatoes", "Onions", "Sumac", "Cumin", "Coriander", "Garlic powder", "Cayenne pepper", "Yogurt", "Lemon juice"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "36", 
            name: "Ramen",
            cuisine: "Japanese",
            mainIngredient: "Noodles",
            ingredients: ["Ramen noodles", "Pork belly", "Soft-boiled egg", "Seaweed", "Green onions", "Bamboo shoots", "Fish cake", "Soy sauce", "Mirin", "Sake", "Dashi broth", "Miso paste"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "37", 
            name: "Pulled Pork Sandwich",
            cuisine: "American",
            mainIngredient: "Pork",
            ingredients: ["Pork shoulder", "Barbecue sauce", "Hamburger buns", "Coleslaw", "Pickles"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "38", 
            name: "Vegetable Curry",
            cuisine: "Indian",
            mainIngredient: "Various vegetables",
            ingredients: ["Potatoes", "Carrots", "Bell peppers", "Cauliflower", "Green peas", "Coconut milk", "Curry paste", "Onion", "Garlic", "Ginger", "Tomatoes", "Cilantro", "Rice (for serving)"],
            courseType: "Main",
            veganFriendly: "Yes"
          });
          
          server.create("food", { 
            id: "39", 
            name: "Ceviche",
            cuisine: "Peruvian",
            mainIngredient: "Fish (e.g., tilapia, snapper)",
            ingredients: ["Fresh fish fillets", "Lime juice", "Red onion", "Cilantro", "Jalapeno", "Tomatoes", "Avocado", "Salt", "Pepper", "Corn", "Tortilla chips (for serving)"],
            courseType: "Appetizer",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "41", 
            name: "Pasta Carbonara",
            cuisine: "Italian",
            mainIngredient: "Pasta",
            ingredients: ["Spaghetti", "Pancetta", "Eggs", "Parmesan cheese", "Garlic", "Black pepper", "Parsley"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
          server.create("food", { 
            id: "47", 
            name: "Vietnamese Broken Rice",
            cuisine: "Vietnamese",
            mainIngredient: "Broken rice",
            ingredients: ["Broken rice", "Grilled pork chop", "Pork skin", "Fried egg", "Pickled vegetables", "Fish sauce", "Lime", "Garlic", "Sugar", "Chili"],
            courseType: "Main",
            veganFriendly: "No"
          });
          
    },

    routes() {
        this.namespace = "api"
        this.logging = false

        this.get("/foods", (schema, request) => {
            return schema.foods.all()
        })
        
        this.get("/foods/:id", (schema, request) => {
            const id = request.params.id
            return schema.foods.find(id)
        })

        

        this.passthrough("https://youtube-search-and-download.p.rapidapi.com/**");
        this.passthrough("https://api.unsplash.com/**");
    }
})