import PropTypes from 'prop-types';

const Recipe = ({ recipeItem }) => {

    const { recipe_name } = recipeItem;

    return (
        <div>
            <h1>{recipe_name}</h1>
        </div>
    );
};

Recipe.propTypes = {
    recipeItem: PropTypes.object.isRequired,
}

export default Recipe;