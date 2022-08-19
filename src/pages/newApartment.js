import React, { useState, useEffect } from 'react'

// Services
import { createApartment } from '../services/axios/apartment'

export default function NewApartment() {

    const [name, setName] = useState("")
    const [street, setStreet] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")

    const [errors, setErrors] = useState([])
    const [response, setResponse] = useState(false)


    const apartmentData = {
        "name": name,
        "street": street,
        "zipCode": zipCode,
        "city": city
    }


    useEffect(() => {
        if (response) {
            window.location.href = "/"
        }
    }, [response])


    const handleApartment = () => {
        createApartment(apartmentData, setErrors, setResponse)
    }

    return (
        <div id="update-form">
            <h1>Créer un appartement:</h1>

            <div className="form">

                <div className="d-flex flex-direction-column">
                    <label htmlFor="name">Nom</label>
                    <input type="text"
                        name="name"
                        id="name"
                        value={name}
                        minLength="2"
                        maxLength="70"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="text-danger">{errors.name}<br></br></span>}
                </div>

                <div className="d-flex flex-direction-column mt-4">
                    <label htmlFor="street">Rue</label>
                    <input type="text"
                        name="street"
                        id="street"
                        value={street}
                        minLength="2"
                        maxLength="70"
                        required
                        onChange={(e) => setStreet(e.target.value)}
                    />
                    {errors.street && <span className="text-danger">{errors.street}</span>}
                </div>


                <div className="d-flex flex-direction-column mt-4">
                    <label htmlFor="zipCode">Code Postale</label>
                    <input type="text"
                        name="zipCode"
                        id="zipCode"
                        value={zipCode}
                        minLength="2"
                        maxLength="70"
                        required
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    {errors.zipCode && <span className="text-danger">{errors.zipCode}<br></br></span>}
                </div>
                <div className="d-flex flex-direction-column mt-4">
                    <label htmlFor="city">Ville</label>
                    <input type="text"
                        name="city"
                        id="city"
                        value={city}
                        minLength="2"
                        maxLength="70"
                        required
                        onChange={(e) => setCity(e.target.value)}
                    />
                    {errors.city && <span className="text-danger">{errors.city}</span>}
                </div>




                <button className="btn-green mt-5" onClick={handleApartment}>Créer</button>
            </div>

        </div>
    )
}
