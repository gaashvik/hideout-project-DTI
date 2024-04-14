import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    // <header classNameName='bg-slate-200 shadow-md'>
    //   <div classNameName='flex justify-between items-center max-w-6xl mx-auto p-3'>
    //     <Link to='/'>
    //       <h1 classNameName='font-bold text-sm sm:text-xl flex flex-wrap'>
    //         <span classNameName='text-slate-500'>Hide</span>
    //         <span classNameName='text-slate-700'>out</span>
    //       </h1>
    //     </Link>
    //     <form
    //       onSubmit={handleSubmit}
    //       classNameName='bg-slate-100 p-3 rounded-lg flex items-center'
    //     >
    //       <input
    //         type='text'
    //         placeholder='Search...'
    //         classNameName='bg-transparent focus:outline-none w-24 sm:w-64'
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //       <button>
    //         <FaSearch classNameName='text-slate-600' />
    //       </button>
    //     </form>
    //     <ul classNameName='flex gap-4'>
    //       <Link to='/'>
    //         <li classNameName='hidden sm:inline text-slate-700 hover:underline'>
    //           Home
    //         </li>
    //       </Link>
    //       <Link to='/about'>
    //         <li classNameName='hidden sm:inline text-slate-700 hover:underline'>
    //           About
    //         </li>
    //       </Link>
    //       <Link to='/profile'>
    //         {currentUser ? (
    //           <img
    //             classNameName='rounded-full h-7 w-7 object-cover'
    //             src={currentUser.avatar}
    //             alt='profile'
    //           />
    //         ) : (
    //           <li classNameName=' text-slate-700 hover:underline'> Sign in</li>
    //         )}
    //       </Link>
    //     </ul>
    //   </div>
    // </header>
    <>
    <nav >
    <div className="bg-white px-8 py-1 shadow-lg ring-1 ring-gray-200">
      <div className="flex items-center justify-between">
        <a className="flex items-center" href="/">
          <img src="https://i.ibb.co/jGMgp7r/seamless-ui.png" className="w-16" alt="Header Logo" />
          <span className="block text-lg font-semibold"><Link to={"/"}>HIDEOUT</Link></span>
        </a>
        {/* <div className="hidden items-center rounded-lg border border-gray-200 px-3 py-2 lg:inline-flex">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
          className="h-[18px] pr-4 text-gray-400 dark:hover:text-gray-900">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <form
          onSubmit={handleSubmit}
          // className='bg-slate-100 p-3 rounded-lg flex items-center'
         >
        <input type="search" placeholder="Search" className="bg-transparent focus:outline-none" />
        </form>
      </div> */}
        <div>
          <div className="hidden md:flex">
            {/* <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/"}>Home</Link></h2> */}
            <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/places"}>Popular Places</Link></h2>
            <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/share"}>Share</Link></h2>
            <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/shared"}>Shared Places</Link></h2>
            <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/about"}>About</Link></h2>
            <h2 className="m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900"><Link to={"/pool"}>Pool</Link></h2>
            <Link to='/profile'>
             {currentUser ? (
              <img
                className='rounded-full h-6 w-7 object-cover mt-4'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' m-4 cursor-pointer font-normal text-gray-600 hover:text-gray-900'>Get started</li>
            )}
          </Link>
            {/* <button className="mt-2 h-11 rounded-full bg-primary px-7 font-semibold text-black"><Link to={"/"}>Get Started</Link></button> */}
            {/* <img src="https://i.ibb.co/2FbV2vm/Ellipse.png" alt="profile picture" className="mr-3 h-10 w-10 rounded-full" /> */}
          </div>
          {/* <button className="rounded-md border border-blue-600 p-3 text-blue-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:bg-gray-600 md:hidden">
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button> */}
        </div>
      </div>
    </div>
  </nav>
  </>
  );
}
