import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from "./CardsContainer.module.css";



const CardsContainer = () => {

    // const recipes = [
    //     {
    //         "id": 782585,
    //         "name": "Cannellini Bean and Asparagus Salad with Mushrooms",
    //         "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    //         "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately 45 minutes from start to finish. This main course has 482 calories, 31g of protein, and 6g of fat per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs $1.35 per serving. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe earns a spoonacular score of 70%, which is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/cannellini-bean-salad-422994\">Cannellini Bean Salad, <a href=\"https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127\">Refreshing Cannellini Bean Salad, and <a href=\"https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177\">Cannellini-and-Green Bean Salad.",
    //         "healthScore": 100,
    //         "steps": [
    //             "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
    //             "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
    //             "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
    //             "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
    //             "Transfer to the salad bowl.Now cook the mushrooms.",
    //             "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
    //             "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
    //             "Pour the dressing over the salad, season with salt and pepper, and toss.",
    //             "Serve at room temperature or chilled."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": true
    //     },
    //     {
    //         "id": 716426,
    //         "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    //         "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    //         "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has 192 calories, 7g of protein, and 6g of fat per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 30 minutes. Overall, this recipe earns a spectacular spoonacular score of 100%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice.",
    //         "healthScore": 75,
    //         "steps": [
    //             "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
    //             "Heat 1T butter and 1T oil in a large skillet over medium heat.",
    //             "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
    //             "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
    //             "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
    //             "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
    //             "Add the peas and broccoli and stir again.",
    //             "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
    //             "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": true
    //     },
    //     {
    //         "id": 715497,
    //         "name": "Berry Banana Breakfast Smoothie",
    //         "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    //         "summary": "If you want to add more lacto ovo vegetarian recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about 21g of protein, 10g of fat, and a total of 457 calories. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly 5 minutes. It is brought to you by Pink When. Overall, this recipe earns a super spoonacular score of 99%. Similar recipes include <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1364145\">Berry Banana Breakfast Smoothie, <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1405583\">Berry Banana Breakfast Smoothie, and <a href=\"https://spoonacular.com/recipes/berry-banana-breakfast-smoothie-1601311\">Berry Banana Breakfast Smoothie.",
    //         "healthScore": 64,
    //         "steps": [
    //             "Take some yogurt in your favorite flavor and add 1 container to your blender.",
    //             "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve."
    //         ],
    //         "diets": [
    //             "lacto ovo vegetarian"
    //         ],
    //         "vegetarian": true,
    //         "vegan": false,
    //         "glutenFree": false
    //     },
    //     {
    //         "id": 715415,
    //         "name": "Red Lentil Soup with Chicken and Turnips",
    //         "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    //         "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup.",
    //         "healthScore": 100,
    //         "steps": [
    //             "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
    //             "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
    //             "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
    //             "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
    //             "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free"
    //         ],
    //         "vegetarian": false,
    //         "vegan": false,
    //         "glutenFree": true
    //     },
    //     {
    //         "id": 716406,
    //         "name": "Asparagus and Pea Soup: Real Convenience Food",
    //         "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
    //         "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food for similar recipes.",
    //         "healthScore": 100,
    //         "steps": [
    //             "Chop the garlic and onions.",
    //             "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
    //             "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
    //             "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "paleolithic",
    //             "lacto ovo vegetarian",
    //             "primal",
    //             "vegan"
    //         ],
    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": true
    //     },
    //     {
    //         "id": 644387,
    //         "name": "Garlicky Kale",
    //         "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    //         "summary": "Garlicky Kale requires approximately 45 minutes from start to finish. This side dish has 170 calories, 2g of protein, and 15g of fat per serving. This recipe serves 2. For 69 cents per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 99%, this dish is outstanding. Try <a href=\"https://spoonacular.com/recipes/garlicky-kale-248759\">Garlicky Kale, <a href=\"https://spoonacular.com/recipes/garlicky-kale-1267347\">Garlicky Kale, and <a href=\"https://spoonacular.com/recipes/garlicky-kale-1584523\">Garlicky Kale for similar recipes.",
    //         "healthScore": 83,
    //         "steps": [
    //             "Heat the olive oil in a large pot over medium heat.",
    //             "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
    //             "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
    //             "Serve hot."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "paleolithic",
    //             "lacto ovo vegetarian",
    //             "primal",
    //             "whole 30",
    //             "vegan"
    //         ],
    //         "vegetarian": true,
    //         "vegan": true,
    //         "glutenFree": true
    //     },
    //     {
    //         "id": 715446,
    //         "name": "Slow Cooker Beef Stew",
    //         "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
    //         "summary": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1578321\">Slow Cooker Beef Stew, <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1241707\">Slow Cooker Beef Stew, and <a href=\"https://spoonacular.com/recipes/slow-cooker-beef-stew-1281171\">Slow Cooker Beef Stew.",
    //         "healthScore": 100,
    //         "steps": [
    //             "To get started, heat your slow cooker to low.",
    //             "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
    //             "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free"
    //         ],
    //         "vegetarian": false,
    //         "vegan": false,
    //         "glutenFree": true
    //     }
    // ]
    const recipes = useSelector(state => state.recipes);

    return(
        <div className={style.container}>
            
            {recipes.map( recip =>{
                return (
                    <div key={recip.id} className={style.divCard}>
                <Card
                //id
                
                id={recip.id}
                //              Nombre.
                name={recip.name}
                healthScore={recip.healthScore}
//                 Imagen.
                image={recip.image}
//              Tipos de dietas.
                diets={recip.diets}
                />
                </div>
                )
            })}
        </div>
    )
};

export default CardsContainer;