import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Style
import './styles/App.scss';

// Components
import LocationUrl from './components/Location'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Apartment from './pages/ApartmentDetails'
import UpdateApartment from './pages/UpdateApartment'
import UpdateRoom from './pages/UpdateRoom'
import NewApartment from './pages/newApartment'
import NewRoom from './pages/newRoom'
import Profile from './pages/Profile'


export default function App() {
  const [location, setLocation] = useState('')


  return (
    <Router>
      <div className="App">

        {/* ----- Get URL location ----- */}
        <LocationUrl setLocation={setLocation} />


        <Header />


        <Routes>
          {/* ----- 404 Not Found ----- */}
          <Route path="*" element={<NotFound />} />

          {/* ----- Homepage ----- */}
          <Route exact path="/" element={<Home />} />

          {/* ----- Apartment Details ----- */}
          <Route exact path="/apartment/:id" element={<Apartment />} />

          {/* ----- Update Apartment ----- */}
          <Route exact path="/apartment/update/:id" element={<UpdateApartment />} />

          {/* ----- Create Apartment ----- */}
          <Route exact path="/apartment/create" element={<NewApartment />} />

          {/* ----- Update Room ----- */}
          <Route exact path="/room/update/:id" element={<UpdateRoom />} />

          {/* ----- Create Room ----- */}
          <Route exact path="/room/create/:id" element={<NewRoom />} />

          {/* ----- Profile ----- */}
          <Route exact path="/profile" element={<Profile />} />

        </Routes>



        <Footer />

      </div >
    </Router>
  );
}
