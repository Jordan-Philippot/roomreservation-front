import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Services
import { createRoom } from '../services/axios/room'

export default function NewRoom() {
  const [number, setNumber] = useState("")
  const [area, setArea] = useState("")
  const [price, setPrice] = useState("")

  const [errors, setErrors] = useState([])
  const [response, setResponse] = useState(false)

  let { id } = useParams();

  const roomData = {
    "number": number,
    "area": area,
    "price": price,
  }

  useEffect(() => {
    if (response) {
      window.location.href= "/";
    }
  }, [response])


  const handleRoom = () => {
    createRoom(roomData, setErrors, setResponse, id)
  }

  return (
    <div id="update-form">
      <h1>Créer une nouvelle chambre:</h1>

      <div className="form">

        <div className="d-flex flex-direction-column">
          <label htmlFor="number">N° de chambre</label>
          <input type="text"
            name="number"
            id="number"
            value={number}
            minLength="2"
            maxLength="70"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <span className="text-danger">{errors.number}<br></br></span>}
        </div>

        <div className="d-flex flex-direction-column mt-4">
          <label htmlFor="area">Surface (en m2)</label>
          <input type="text"
            name="area"
            id="area"
            value={area}
            minLength="2"
            maxLength="70"
            required
            onChange={(e) => setArea(e.target.value)}
          />
          {errors.area && <span className="text-danger">{errors.area}</span>}
        </div>


        <div className="d-flex flex-direction-column mt-4">
          <label htmlFor="price">Prix (en €)</label>
          <input type="text"
            name="price"
            id="price"
            value={price}
            minLength="2"
            maxLength="70"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <span className="text-danger">{errors.price}<br></br></span>}

          {errors.apart && <span className="text-danger">{errors.apart}</span>}

        </div>


        <button className="btn-green mt-5" onClick={handleRoom}>Créer</button>
      </div>

    </div>
  )
}
