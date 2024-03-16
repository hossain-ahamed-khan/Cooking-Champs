import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { TbFlame } from "react-icons/tb";

const Recipe = ({ recipeItem, handleWantCook }) => {

    const { recipe_name, recipe_img, short_description, ingredients, preparing_time, calories } = recipeItem;

    return (
        <div className='flex flex-col justify-between p-6 border-2 border-[#28282833] rounded-2xl'>
            <div>
                <img className='w-full rounded-2xl' src={recipe_img} alt="" />
            </div>
            <h3 className='text-[#282828] text-xl font-semibold my-4'>{recipe_name}</h3>
            <p className='text-[#878787] text-base font-normal pb-6 border-b-2'>{short_description}</p>
            <p className='text-[#282828] text-lg font-medium py-2'>Ingredients: {ingredients.length}</p>
            <ul className='text-[#878787] text-lg font-normal pb-6 border-b-2'>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <div className='flex gap-6 py-3 text-[#282828CC] text-base font-normal'>
                <div className='flex items-center gap-2'>
                    <span><CiClock2 /></span>
                    <p> {preparing_time} minutes</p>
                </div>

                <div className='flex items-center gap-2'>
                    <span><TbFlame /></span>
                    <p> {calories} calories</p>
                </div>

            </div>
            <button onClick={() => handleWantCook(recipeItem)}
                className='w-1/2 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium px-6 py-3'>Want to Cook</button>

        </div>
    );
};

Recipe.propTypes = {
    recipeItem: PropTypes.object.isRequired,
    handleWantCook: PropTypes.func
}

export default Recipe;