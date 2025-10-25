function Recipe(props) {
    return(
        <div>
            <h2>{props.recipe.name}</h2>
            <h4>Ingredients</h4>
            <ul>
                {props.recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
            <h4>Instructions</h4>
            <ol>
                {props.recipe.instructions.map((instruction) => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}

export default Recipe