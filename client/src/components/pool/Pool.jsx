import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '/Users/nikhilyadav/hideout-project-DTI/client/src/data/pooldata.js'; 

const Pool = () => {

  const [ride] = useState(data);

  return (
    <>
  <div className='max-w-[1640px] mx-auto px-4 py-8 '>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">RIDES!
      </h1>

      <Link to={"/createride"}><p class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Create a new Ride
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
      </p>
      </Link>

      <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
            {ride.map((item, index) => (
              <Link to={`/ride/${item.id}`}>
            <div
                key={index}
                className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
                <img
                src={item.image}
                alt={item.name}
                className='w-full h-[300px] object-cover rounded-t-lg'
                />
                <div className='flex justify-between px-4 py-4'>
                <p className='font-bold'>Name: {item.name}</p>
                <p>
                    <span className='bg-primary text-white p-1 rounded'>Price: 
                    {item.price}
                    </span>
                </p>
                </div>
                <div className='flex justify-between px-4 py-0'>
                <p className='font'>Start: {item.Start} to {item.End}</p>
                </div>
                <div className='flex justify-between px-4 py-0'>
                <p className='font'>Leaving Time: {item.Time}</p>
                </div>
                <div className='flex justify-between px-4 py-0'>
                <p className='font'>Duration: {item.JTime}</p>
                </div>
            </div>
            </Link>
          ))}
        </div>
    </div> 

    </>
  )
}

export default Pool

