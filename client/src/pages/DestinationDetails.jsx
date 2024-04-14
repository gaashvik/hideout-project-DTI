import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js';

const DestinationDetails = () => {

  // const [count, setCount] = useState(0);
  // const handleLikeClick = () => {
  //   // Increment the count by 1 when the button is clicked
  //   setCount(prevCount => prevCount + 1);
  // };

  const { id } = useParams();
  const destination = data.find(item => item.id === parseInt(id));


  if (!destination) {
    return <div>destination not found!</div>;
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
       src={destination.image} alt={destination.name} />
      <p className="mb-4 py-4 text-lg font-normal text-black-900">Rating :  {destination.price}</p>
      <p className="mb-4 text-lg font-normal text-black-900">{destination.description}</p>

      {/* <div>
      <button onClick={handleLikeClick}><label for="toggle-heart">❤</label></button>
      <span>{count} Likes</span>
    </div> */}
    </div>
  );
};

export default DestinationDetails;