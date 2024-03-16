import cover from '../../assets/cover.png';

const Hero = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className='w-full relative'>
                <div>
                    <img className='w-full' src={cover} alt="" />
                </div>
                <div className='w-9/12 mx-auto absolute top-1/4 left-36 text-white text-center'>
                    <h1 className='text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-lg font-normal my-12'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-[#0BE58A] text-[#150B2B] text-xl font-semibold rounded-full px-5 py-2'>Explore Now</button>
                        <button className='border border-white rounded-full px-5 py-2'>Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;