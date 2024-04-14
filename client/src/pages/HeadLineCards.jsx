import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Braj Holi</p>
          <p className='px-2'>Increadible holi experience</p>
          <button className='border-secondary bg-secondary px-4 py-2 rounded-lg   text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2635390/pexels-photo-2635390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Kashmir</p>
          <p className='px-2'>Stunning Views</p>
          <button className='border-secondary bg-secondary px-4 py-2 rounded-lg  text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2862204/pexels-photo-2862204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Goa</p>
          <p className='px-2'>Beaches & Beers</p>
          <button className='border-secondary bg-secondary px-4 py-2 rounded-lg   text-black mx-2 absolute bottom-4'>Explore</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/4429333/pexels-photo-4429333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
