import PropTypes from 'prop-types';

const Cook = ({ cook, handleCooking }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cook;
    return (
        <>
            <tr>
                <td className='py-2'>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button
                    onClick={() => handleCooking(cook, recipe_id)}
                    className='bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium px-4 py-2 my-5'>Preparing</button></td>
            </tr>


        </>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCooking: PropTypes.func
}

export default Cook;