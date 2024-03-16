import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Recipe from '../recipe/Recipe';
import Cook from '../cook/Cook';
import Cooking from "../cooking/Cooking";

const Recipes = () => {

    const [recipeItems, setRecipeItem] = useState([]);
    const [wantCook, setWantCook] = useState([]);
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipeItem(data))
    }, [])

    const handleWantCook = item => {
        const newCookItems = [...wantCook, item];
        const filteredNewCookItems = newCookItems.filter((value, index) => newCookItems.indexOf(value) === index);
        setWantCook(filteredNewCookItems);
    }

    const handleCooking = (cook, recipe_id) => {
        // add to cooking 
        const newCooking = [...cooking, cook];
        setCooking(newCooking);

        // remove from want to cook 
        const remainWantCook = wantCook.filter(want => want.recipe_id != recipe_id);
        setWantCook(remainWantCook);

    }

    return (
        <div className="w-10/12 mx-auto my-14">
            <div className="w-3/5 mx-auto text-center my-8">
                <h3>Our Recipes</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="flex gap-6">
                <div className="w-3/5 grid grid-cols-2 gap-6">

                    {
                        recipeItems.map(recipeItem => <Recipe
                            handleWantCook={handleWantCook}
                            key={recipeItem.recipe_id}
                            recipeItem={recipeItem}></Recipe>)
                    }

                </div>
                <div className="w-2/5 border-2 border-[#28282833] rounded-2xl text-center">
                    <div className="py-6 px-1">
                        <h1 className="text-[#282828] text-2xl font-semibold">Want to cook: {wantCook.length}</h1>
                        <table className="w-full mx-auto my-6 table-fixed">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wantCook.map((cook, idx) => <Cook
                                        handleCooking={handleCooking}
                                        key={idx}
                                        cook={cook}></Cook>)
                                }
                            </tbody>
                        </table>

                    </div>

                    <div className="py-6 px-1">
                        <h1 className="text-[#282828] text-2xl font-semibold">Currently cooking: {cooking.length}</h1>
                        <table className="w-full my-6 table-fixed">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cooking.map((cookingItem, idx) => <Cooking key={idx} cookingItem={cookingItem}></Cooking>)
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    );
};

Recipes.propTypes = {
    handleWantCook: PropTypes.func,
}

export default Recipes;