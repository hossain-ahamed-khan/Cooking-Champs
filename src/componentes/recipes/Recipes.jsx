
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import Recipe from '../recipe/Recipe';
import Cook from '../cook/Cook';
import Cooking from "../cooking/Cooking";


const Recipes = () => {
    const [recipeItems, setRecipeItem] = useState([]);
    const [wantCook, setWantCook] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [cookingTime, setCookingTime] = useState(0);
    const [calories, setCalories] = useState(0);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipeItem(data))
    }, [])

    const handleWantCook = (item, toast) => {
        const isExist = wantCook.find(wc => wc.recipe_id == item.recipe_id);
        if (!isExist) {
            const newCookItems = [...wantCook, item];
            setWantCook(newCookItems);
        }
        else {
            toast('already exist');
        }
    };

    const handleCooking = (cook, recipe_id) => {
        // add to cooking 
        const newCooking = [...cooking, cook];
        setCooking(newCooking);

        // remove from want to cook 
        const remainWantCook = wantCook.filter(want => want.recipe_id != recipe_id);
        setWantCook(remainWantCook);

        // calculate total cooking time 
        const cookingTimes = newCooking.map(c => c.preparing_time)
        const cookingTimesTotal = cookingTimes.reduce((initialSum, a) => initialSum + a, 0);
        setCookingTime(cookingTimesTotal);

        // calculate total calories
        const calories = newCooking.map(c => c.calories)
        const caloriesTotal = calories.reduce((initialSum, a) => initialSum + a, 0);
        setCalories(caloriesTotal);

    };

    return (
        <div className="w-10/12 mx-auto my-16">
            <div className="w-3/5 mx-auto text-center my-12">
                <h3 className="text-[#150B2B] text-4xl font-semibold my-6">Our Recipes</h3>
                <p className="text-[#150B2B99] text-xs lg:text-base font-light lg:font-normal">Embark on a culinary journey with our curated collection of recipes. From traditional favorites to innovative dishes, there is something for every palate to enjoy. </p>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-6">
                <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {
                        recipeItems.map(recipeItem => <Recipe
                            handleWantCook={handleWantCook}
                            key={recipeItem.recipe_id}
                            recipeItem={recipeItem}></Recipe>)
                    }

                </div>
                <div className="w-full lg:w-2/5 h-full border-2 border-[#28282833] rounded-2xl text-center">
                    <div className="py-6 px-1">
                        <h1 className="w-1/2 mx-auto pb-3 text-[#282828] text-2xl font-semibold border-b-2">Want to cook: {wantCook.length}</h1>
                        <table className="w-full mx-auto my-6 table-fixed">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wantCook.map((cook, index) => <Cook
                                        handleCooking={handleCooking}
                                        key={index}
                                        index={index}
                                        cook={cook}></Cook>)
                                }
                            </tbody>
                        </table>

                    </div>

                    <div className="py-6 px-1">
                        <h1 className="w-3/5 mx-auto pb-3 border-b-2 text-[#282828] text-2xl font-semibold">Currently cooking: {cooking.length}</h1>
                        <table className="w-full my-6 table-fixed">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cooking.map((cookingItem, index) => <Cooking
                                        key={index}
                                        index={index}
                                        cookingItem={cookingItem}></Cooking>)
                                }
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td className="pt-2">Total Time = {cookingTime} minutes</td>
                                    <td className="pt-2">Total Calories = {calories} calories</td>
                                </tr>
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