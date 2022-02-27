import React, { createContext, useState,Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './Common.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Loading from './CommonComponent/Loading/Loading';
export const UserContext = createContext()
const Home = lazy(()=> import('./Component/Home/Home'))
const NotFound = lazy(()=> import('./Component/NotFound/NotFound'))
const SelectLocation = lazy(()=> import('./Component/SelectLocation/SelectLocation'))
const HotelDetails = lazy(()=> import('./Component/HotelDetails/HotelDetails'))
const Login = lazy(()=> import('./Component/Login/Login'))
const PrivateRoute = lazy(()=> import('./Component/Login/PrivateRoute/PrivateRoute'))
// const PrivateRouteHoDetails = lazy(()=> import('./Component/BookHotel/PrivateRouteHoDetails/PrivateRouteHoDetails'))
const BookHotel = lazy(()=> import('./Component/BookHotel/BookHotel'))
const HomeHotelDetails = lazy(()=> import('./Component/homeHotelDetails/HomeHotelDetails'))
const HelpPage = lazy(()=> import('./Component/HelpPage/HelpPage'))



function App() {
  const [userDataInfo, setUserDataInfo] = useState({
    isLocationValid: false,
    userArrival: '',
    isSignedIn:false,
    userDeparture: '',
    userLocation: '',
    email: "",
    admin: false,
    diffDays: 0
  })
  return (
    <Suspense fallback={<Loading/>}>
    <UserContext.Provider value={[userDataInfo, setUserDataInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/location">
            <SelectLocation />
          </Route>
          <Route path="/details/:id">
            <HomeHotelDetails />
          </Route>
          <PrivateRoute path="/hotelDetails/:id">
            <HotelDetails />
          </PrivateRoute>
          <PrivateRoute path="/bookHotel/:id">
            <BookHotel />
          </PrivateRoute>
          <Route exact path="/helps">
              <HelpPage />
            </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </Suspense>
  );
}

export default App;
