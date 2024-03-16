import PropTypes from 'prop-types';

const Cooking = ({ cookingItem, index }) => {
    const { recipe_name, preparing_time, calories } = cookingItem;

    return (
        <>
            <tr className='border'>
                <td>{index + 1}</td>
                <td className='py-3'>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </>
    );
};

Cooking.propTypes = {
    cookingItem: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Cooking;