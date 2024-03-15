import { FaCircleUser } from "react-icons/fa6";

const Navber = () => {
    return (
        <div className="w-10/12 mx-auto flex justify-between py-4">

            <div>
                <h1>Recipe Calories</h1>
            </div>

            <div className="flex gap-3">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>

            <div>
                <input type="text" placeholder="Search" />
                <button><FaCircleUser /></button>
            </div>

        </div>
    );
};

export default Navber;