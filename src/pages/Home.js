

import React, { useEffect, useState } from 'react'

// Components
import Loader from '../components/Loader'
import Cursor from '../components/Cursor';
import Apartment from '../components/Apartment/Apartment';

// Services
import { getApartments } from '../services/axios/apartment'


export default function Home() {

  const [apartments, setApartments] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getApartments(setApartments, setLoading)
  }, [])


  return (
    <div id="home">

      <Cursor />

      <div>
        <h1>Bonjour Jordan !<br /> Bienvenue sur AutoRoom Reservation</h1>
      </div>

      <div>
        <a className="btn-green" href={"/apartment/create"}>Créer un appartement</a>
      </div>


      <div className="apartments">


        {loading ? <Loader /> : apartments.length > 0 ? apartments.map((apartment, key) => {
          return <Apartment apartment={apartment} key={key} />
        }) : <p className="alert alert-success no-data">Aucun appartement n'a été trouvé</p>
        }
      </div>


    </div >
  )
}
