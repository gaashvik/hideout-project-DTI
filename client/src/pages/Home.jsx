import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Hero from '../components/Hero.jsx'
import HeadlineCards from './HeadlineCards'
import Feature from './Features'
// import Shared from './Shared'
import { data } from '../data/data.js';
import Footer from './Footer.jsx';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  const [place] = useState(data);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    // <div>
    //   {/* top */}
    //   <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
    //     <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
    //       Find your next <span className='text-slate-500'>perfect</span>
    //       <br />
    //     destination with ease
    //     </h1>
    //     <div className='text-gray-400 text-xs sm:text-sm'>
    //       Hideout is the best place to find your next perfect touring destination to
    //       live.
    //       <br />
    //       We have a wide range of significant and undiscovered places for you to choose from.
    //     </div>
    //     <Link
    //       to={'/about'}
    //       className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
    //     >
    //       Let's get started...
    //     </Link>
    //   </div>

    //   {/* swiper */}
    //   <Swiper navigation>
    //     {offerListings &&
    //       offerListings.length > 0 &&
    //       offerListings.map((listing) => (
    //         <SwiperSlide>
    //           <div
    //             style={{
    //               background: `url(${listing.imageUrls[0]}) center no-repeat`,
    //               backgroundSize: 'cover',
    //             }}
    //             className='h-[500px]'
    //             key={listing._id}
    //           ></div>
    //         </SwiperSlide>
    //       ))}
    //   </Swiper>

    //   {/* listing results for offer, sale and rent */}

    //   <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
    //     {offerListings && offerListings.length > 0 && (
    //       <div className=''>
    //         <div className='my-3'>
    //           <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
    //           <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
    //         </div>
    //         <div className='flex flex-wrap gap-4'>
    //           {offerListings.map((listing) => (
    //             <ListingItem listing={listing} key={listing._id} />
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {rentListings && rentListings.length > 0 && (
    //       <div className=''>
    //         <div className='my-3'>
    //           <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
    //           <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
    //         </div>
    //         <div className='flex flex-wrap gap-4'>
    //           {rentListings.map((listing) => (
    //             <ListingItem listing={listing} key={listing._id} />
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //     {saleListings && saleListings.length > 0 && (
    //       <div className=''>
    //         <div className='my-3'>
    //           <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
    //           <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
    //         </div>
    //         <div className='flex flex-wrap gap-4'>
    //           {saleListings.map((listing) => (
    //             <ListingItem listing={listing} key={listing._id} />
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <>
    <Hero />
    <HeadlineCards />

    <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-primary font-bold text-4xl text-center'>
                Top Rated Places
            </h1>

            <div className=''>
            <Link to={"/places"}><button className="flex text-sm rounded-full items-center border-2 border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-white disabled:bg-gray-300 ">
                <span>More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button></Link>
            </div>

        <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
        {place.slice(0,6).map((item, index) => (
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


    <Feature />
    

    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-primary font-bold text-4xl text-center'>
        Top Shared Places/Stories
        </h1>

        <div className=''>
            <Link to={"/shared"}><button className="flex text-sm rounded-full items-center border-2 border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary hover:text-white disabled:bg-gray-300 ">
                <span>More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button></Link>
            </div>

        <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
            {place.slice(0,5).map((item, index) => (
              <Link to={`/shared/${item.id}`}>
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
</>
  );
}
