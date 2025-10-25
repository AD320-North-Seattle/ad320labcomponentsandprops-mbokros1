import Recipe from "./Recipe.jsx";
import {recipes} from "./data.js";

function RecipeContainer(){
    return(
        <div>
            {recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)}
        </div>
    );
}

export default RecipeContainer