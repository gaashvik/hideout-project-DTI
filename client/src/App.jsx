import { BrowserRouter, Routes, Route , useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Places from './pages/Places';
import Shared from './pages/Shared';
import Share from './pages/Share';
import Contact from './pages/Contact';
import DestinationDetails from './pages/DestinationDetails';
import Pool from './components/pool/Pool';
import Ride from './components/pool/Ride';
import CreateRide from './components/pool/CreateRide';
import Footer from './pages/Footer';

export default function App() {
  // const location = useLocation();
  // const isSignUpOrSignInPage = location.pathname === './pages/SignUp' || location.pathname === './pages/SignIn';
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/places' element={<Places />} />
        <Route path='/shared' element={<Shared />} />
        <Route path='/share' element={<Share />} />
        <Route path='/pool' element={<Pool />} />
        <Route path='/createride' element={<CreateRide />} />
        <Route path='/contact' element={<Contact />} />
        <Route exact path="/destination/:id" element={<DestinationDetails />} /> 
        <Route exact path="/shared/:id" element={<DestinationDetails />} /> 
        <Route exact path="/ride/:id" element={<Ride />} /> 
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
      <Footer /> 
      {/* {!isSignUpOrSignInPage && <Footer />}  */}
    </BrowserRouter>
    
  );

}
