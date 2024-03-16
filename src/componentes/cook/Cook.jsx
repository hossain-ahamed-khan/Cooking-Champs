import PropTypes from 'prop-types';

const Cook = ({ cook, index, handleCooking }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cook;
    return (
        <>
            <tr className='border'>
                <td>{index + 1}</td>
                <td className='py-2'>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button
                    onClick={() => handleCooking(cook, recipe_id)}
                    className='bg-[#0BE58A] rounded-full text-[#150B2B] text-sm  font-normal px-2 py-2 my-5'>Preparing</button></td>
            </tr>


        </>
    );
};

Cook.propTypes = {
    cook: PropTypes.object.isRequired,
    handleCooking: PropTypes.func,
    index: PropTypes.number
}

export default Cook;