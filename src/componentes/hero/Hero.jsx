import cover from '../../assets/cover.png';

const Hero = () => {
    return (
        <div className="w-10/12 h-60 border lg:h-auto mx-auto">
            <div className='w-full relative'>
                <div>
                    <img className='w-full h-60 lg:h-auto' src={cover} alt="" />
                </div>
                <div className='w-9/12 mx-auto absolute top-1/4 left-14 lg:left-36 text-white text-center'>
                    <h1 className='text-xl lg:text-5xl font-normal lg:font-bold'>Whip Up Culinary Magic, Your Go-To Destination for Recipes</h1>
                    <p className='text-xs lg:text-lg font-extralight lg:font-normal my-2 lg:my-12'>Discover mouthwatering recipes, cooking tips, kitchen hacks, and culinary inspiration to elevate your home cooking experience. Join our food-loving community today.</p>
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-[#0BE58A] text-[#150B2B] text-sm lg:text-xl font-semibold rounded-full px-2 lg:px-5 py-1 lg:py-2'>Explore Now</button>
                        <button className='border border-white rounded-full px-3 lg:px-5 py-1 lg:py-2'>Our Feedback</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;