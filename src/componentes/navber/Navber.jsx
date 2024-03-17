import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Navber = () => {
    return (
        <div className="w-10/12 mx-auto flex justify-between py-4">

            <div>
                <h1 className="text-[#150B2B] text-3xl font-bold">Recipe Calories</h1>
            </div>

            <div className="flex gap-12 text-[#150B2BB3] text-base font-normal items-center max-sm:hidden">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>

            <div className="relative flex items-center">
                <CiSearch className="absolute left-2 max-sm:hidden" />
                <input className="bg-[#150B2B0D] rounded-full px-7 py-2 max-sm:hidden" type="text" placeholder="search" />
                <button><FaCircleUser className="w-10 h-10 text-[#0BE58A] ml-3" /></button>
            </div>

        </div>
    );
};

export default Navber;