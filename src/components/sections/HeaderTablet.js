import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import gsap from "gsap"

// Images
import Logo from "../../images/logo.png"


export default function HeaderTablet() {

  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(false)

  const [scrollTop, setScrollTop] = useState("")
  const [lastScrollTop, setLastScrollTop] = useState('')


  /* ----- Get The NavBar ----- */
  const navbar = document.getElementById('headerTablet');

  const toggledNavbar = (e) => {
    e.preventDefault();
    setNav(!nav ? true : false)
  }

  useEffect(() => {
    if (!nav) {
      gsap.to('#navbarNavDropdown', { display: 'none', opacity: 0, duration: 0.8});
    } else {
      gsap.to('#navbarNavDropdown', { display: 'block', opacity: 1, duration: 0.8 });
    }
  }, [nav])




  /* ----- On every scroll this funtion will be called ----- */
  window.addEventListener('scroll', function () {

    /* ----- This line will get the location on scroll ----- */
    setScrollTop(window.pageYOffset || document.documentElement.scrollTop)


    /* ----- If it will be greater than the previous ----- */
    if (scrollTop > lastScrollTop) {
      setShow(false)
    } else {
      setShow(true)
    }

    /* ----- New Position Stored ----- */
    setLastScrollTop(scrollTop)
  });


  useEffect(() => {
    if (show) {
      gsap.fromTo(navbar, { top: '-100px', opacity: 0 }, { duration: 1, top: 0, opacity: 1, ease: 'ease-in-out' });
    } else {
      gsap.fromTo(navbar, { top: 0, opacity: 1 }, { duration: 1, top: '-100px', opacity: 0, ease: 'ease-in-out' });
    }
    // eslint-disable-next-line
  }, [show])


  return (
    <div id="headerTablet">

      <nav className="navbar navbar-expand-xl">

        {/* ----- Logo ----- */}
        <Link className="navbar-brand" to="/"><img src={Logo} alt="Logo Jordan Philippot développeur fullstack" /></Link>

        {/* ----- Button toggled responsive  ----- */}
        <button onClick={toggledNavbar} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ----- Dropdown on click ----- */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav mr-auto">

            <div className="dropdown-divider"></div>

            <li className="nav-item">
              <Link to="/#about">À propos</Link>
            </li>

            <div className="dropdown-divider" id="assistant-hr"></div>

            <li className="nav-item">
              <Link to="/#apartments">Appartements</Link>
            </li>

            <div className="dropdown-divider"></div>

            <li className="nav-item">
              <Link to="/profile">Profil</Link>
            </li>

          </ul>

        </div>
        {/* ----- End Dropdown ----- */}

      </nav>

    </div>
  )
}