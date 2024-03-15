import { useEffect, useState } from "react";

import Recipe from '../../componentes/recipe/Recipe';

const Recipes = () => {

    const [recipeItems, setRecipeItem] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipeItem(data))
    }, [])

    console.log(recipeItems);

    return (
        <div className="w-10/12 mx-auto my-14">
            <div className="w-3/5 mx-auto text-center my-8">
                <h3>Our Recipes</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex border-2">
                <div className="w-3/5 h-96 border-2">

                    {
                        recipeItems.map(recipeItem => <Recipe key={recipeItem.recipe_id} recipeItem={recipeItem}></Recipe>)
                    }

                </div>
                <div className="w-2/5 h-96 border-2">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipes;