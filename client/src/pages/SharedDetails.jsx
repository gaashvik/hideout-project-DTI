import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js';

const SharedDetails = () => {




  const { id } = useParams();
  const shared = data.find(item => item.id === parseInt(id));


  if (!shared) {
    return <div>shared not found!</div>;
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <div className='flex flex-row justify-between px-4'>
      <h1 className="mb-4  text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{destination.name}</span>
      </h1>
      <div>
      <button type="button" 
        class="px-4 md:text-3xl   py-3 bg-white rounded-full  outline-none focus:ring-4 ring-red-500 shadow-lg transform active:scale-75 transition-transform"
    ><label for="toggle-heart">❤</label>
    </button>
    </div>
    </div>
      <img className='rounded-lg h-96 w-full object-cover object-center'
       src={shared.image} alt={shared.name} />
      <p className="mb-4 py-4 text-lg font-normal text-black-900">Rating :  {shared.price}</p>
      <p className="mb-4 text-lg font-normal text-black-900">{shared.description}</p>
      <button onClick={this.incrementMe}>
Likes: {this.state.count} </button>
    </div>
  );
};

export default SharedDetails;