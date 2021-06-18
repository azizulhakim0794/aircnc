import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import SelectLocation from './Component/SelectLocation/SelectLocation';
import HotelDetails from './Component/HotelDetails/HotelDetails';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import PrivateRouteHoDetails from './Component/BookHotel/PrivateRouteHoDetails/PrivateRouteHoDetails';
import BookHotel from './Component/BookHotel/BookHotel';
import HelpPage from './Component/HelpPage/HelpPage';
import HomeHotelDetails from './Component/homeHotelDetails/HomeHotelDetails';
export const UserContext = createContext()

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
          <PrivateRouteHoDetails path="/hotelDetails/:id">
            <HotelDetails />
          </PrivateRouteHoDetails>
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
  );
}

export default App;
