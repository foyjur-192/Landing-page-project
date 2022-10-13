import React from 'react';

const HeroSection = () => {
    return (
        <div className='background-color'>
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="  lg:text-8xl text-4xl  mb-4 font-bold text-white lg:mt-12 lg:mb-8">We Help You the Grow Your <span className='text-color'>Business</span> </h1>
      <p class="mb-8 leading-relaxed text-white text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book,when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white background-green border-0 py-3 px-8 focus:outline-none hover:text-gray-900 hover:bg-amber-400 rounded text-xl font-medium">GET STARTED</button>
      </div>
    </div>
    <img class="lg:w-full md:w-3/6 w-5/6 mb-10 mt-16 object-cover object-center rounded shadow" alt="hero" src="https://i.ibb.co/rF6fz2D/Screenshot-9.png" />
  </div>
 
</section>
        </div>
    );
};

export default HeroSection;