import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from "../../images/logo.png"

// Packages 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import gsap from "gsap"


export default function HeaderDesktop() {

    const [show, setShow] = useState(false)

    const [scrollTop, setScrollTop] = useState("")
    const [lastScrollTop, setLastScrollTop] = useState('')

    /* ----- Get The NavBar ----- */
    const navbar = document.getElementById('headerDesktop'); 

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

    useEffect(() => {
        setShow(true)
    }, [])




    return (
        <div id="headerDesktop">
            <nav className="navbar navbar-expand-xl">

                {/* ----- Logo ----- */}
                <Link className="navbar-brand" to="/">
                    <LazyLoadImage
                        alt={"Aliz Logo"}
                        src={Logo}
                        effect="blur" />
                </Link>

                <div className="collapse navbar-collapse">
                    {/* ----- Nav right ----- */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/#apartments"}>Appartements</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/profile"}>Profil</Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/#about"}>À propos</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}