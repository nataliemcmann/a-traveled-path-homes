import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import AboutPage from '../AboutPage/AboutPage';
import ProfilePage from '../ProfilePage/ProfilePage';
// import UserPage from '../UserPage/UserPage'; profile page is now userPage

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProfileForm from '../ProfileForm/ProfileForm';
import EditProfileForm from "../ProfileForm/EditProfileForm";

//property form imports
import PropertyDescriptionForm from '../PropertyDescription/PropertyDescriptionForm';
import PropertyBasicsForm from "../PropertyBasicsForm/PropertyBasicsForm";
import ProperyAddressForm from "../PropertyAddressForm/PropertyAddressForm";
import PropertyPhotoForm from '../PropertyPhotoForm/PropertyPhotoForm';
import PropertyAmenitiesForm from "../PropertyAmenitiesForm/PropertyAmenitiesForm";
import PropertyStayLengthForm from "../PropertyStayLengthForm/PropertyStayLengthForm";
import PropertyPriceForm from "../PropertyPriceForm/PropertyPriceForm";
import ReviewPage from "../PropertyReview/PropertyReview";
import InstructionsDetails from "../InstructionsDetails/InstructionsDetails";


import PropertyDetails from "../PropertyDetails/PropertyDetails";


import UserDashboard from "../UserToggle/UserDashboard";


import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/profile"
          >
            <ProfilePage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path= "/profileForm"
          >
            <ProfileForm />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path= "/editProfileForm"
          >
            <EditProfileForm />
          </ProtectedRoute>
          
          <ProtectedRoute
            exact
            path= "/instructions"
          >
            <InstructionsDetails  />
          </ProtectedRoute>
          
          <ProtectedRoute
            exact
            path= "/dashboard"
          >
            <UserDashboard  />
          </ProtectedRoute>

          <ProtectedRoute exact path="/property/:id">
          <PropertyDetails />
        </ProtectedRoute>
        
        {/* <ProtectedRoute
            exact
            path="/toggle"
          >
            <UserToggle />
          </ProtectedRoute> */}

          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/renterdashboard"
          >
            <RenterDashboard />
          </ProtectedRoute> */}

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/home" />

            ):
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>


          <ProtectedRoute exact path="/describe">
            <PropertyDescriptionForm />
          </ProtectedRoute>

          <ProtectedRoute exact path= "/address">
            <ProperyAddressForm  />
          </ProtectedRoute>

          <ProtectedRoute exact path="/basics">
            <PropertyBasicsForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/amenities">
            <PropertyAmenitiesForm />
          </ProtectedRoute>

          <ProtectedRoute exact path= "/photos">
            <PropertyPhotoForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/stayLength">
            <PropertyStayLengthForm />
          </ProtectedRoute>
          propertygallery
          {/* <ProtectedRoute exact path="/price">
            <PriceForm />
          </ProtectedRoute> */}


          <ProtectedRoute exact path="/price">
            <PropertyPriceForm />
          </ProtectedRoute>

          <ProtectedRoute exact path="/review">
            <ReviewPage />
          </ProtectedRoute>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :

              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>


          <Route
            exact
            path="/home"
          >
              <LandingPage />
          </Route>


          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
