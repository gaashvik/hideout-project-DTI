import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '/Users/nikhilyadav/hideout-project-DTI/client/src/data/pooldata.js';

const Ride = () => {
    const { id } = useParams();
    const ride = data.find(item => item.id === parseInt(id, 10));

  
    if (!ride) {
      return <div>ride not found!</div>;
    }
  
    return (
      <div className='flex max-w-[1640px] m-auto px-4 py-12'>
        <img className="h-1/2 w-1/2 rounded-lg object-cover object-center" src={ride.image} alt={ride.name} />
        <div className='px-12 py-24' >
        <h2 className='mb-4 text-5xl font-extrabold'>{ride.name}</h2>
        
        <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-grey">{ride.Start} &#10148; {ride.End} </p>
        <p className="max-w-lg text-2xl  leading-normal text-gray-900 dark:text-grey-900">{ride.Time} </p>
        <p className="max-w-lg text-2xl  leading-normal text-gray-900 dark:text-grey-900">Journey Time : {ride.JTime}</p>
        <p className="max-w-lg text-2xl  leading-normal text-gray-900 dark:text-grey-900">Price :  {ride.price}</p>
        <p className="max-w-lg text-2xl  leading-normal text-gray-900 dark:text-grey-900">{ride.description}</p>
        <br />
        <button type="button" class="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary rounded-lg text-center dark:bg-primary dark:hover:bg-secondary dark:focus:ring-secondary">Book Now</button>
        </div>
      </div>
    );
}

export default Ride