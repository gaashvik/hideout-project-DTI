import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/data.js';

const Places = () => {
  //   console.log(data);
  const [place, setPlace] = useState(data);

  //   Filter Type 
  const filterType = (category) => {
    setPlace(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by rating
  const filterPrice = (price) => {
    setPlace(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-primary font-bold text-4xl text-center'>
        Top Rated Places
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setPlace(data)}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('Nature')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Nature
            </button>
            <button
              onClick={() => filterType('Beaches')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Beaches
            </button>
            <button
              onClick={() => filterType('Tempels')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Temples
            </button>
            <button
              onClick={() => filterType('Cities')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              Cities
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Ratings</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('*')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              *
            </button>
            <button
              onClick={() => filterPrice('**')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              **
            </button>
            <button
              onClick={() => filterPrice('***')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              ***
            </button>
            <button
              onClick={() => filterPrice('****')}
              className='m-1 border-primary text-primary hover:bg-primary hover:text-white'
            >
              ****
            </button>
          </div>
        </div>
      </div>

      {/* Display Place */}
      <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
        {place.map((item, index) => (
          <Link to={`/destination/${item.id}`}>
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[300px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-primary text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
            <div className='flex justify-between px-4 py-4'>
              <p className='font'>{item.description}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Places;
