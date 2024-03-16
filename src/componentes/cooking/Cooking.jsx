import PropTypes from 'prop-types';

const Cooking = ({ cookingItem }) => {
    const { recipe_name, preparing_time, calories } = cookingItem;

    return (
        <>
            <tr>
                <td className='py-2'>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};

Cooking.propTypes = {
    cookingItem: PropTypes.object.isRequired
}

export default Cooking;