import PropTypes from 'prop-types';

const Cook = ({ cook, handleCooking }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cook;
    return (
        <>
            <tr>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>

                <button
                    onClick={() => handleCooking(cook, recipe_id)}
                    className='bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium px-4 py-2 my-2'>Preparing</button>
            </tr>
        </>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}

export default Cook;