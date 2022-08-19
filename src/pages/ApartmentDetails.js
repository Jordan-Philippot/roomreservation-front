

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import Loader from '../components/Loader'
import Cursor from '../components/Cursor';

// Services
import { getApartmentDetails, deleteApartment } from '../services/axios/apartment'
import { deleteRoom } from '../services/axios/room'

// Images 
import HotelImage from '../images/hotel.webp'
import RoomImage from '../images/room.jpg'


export default function ApartmentDetails() {

    // Get apartment
    const [apartment, setApartment] = useState([])
    const [loading, setLoading] = useState(false)


    // Delete apartment
    const [responseDeleteApart, setResponseDeleteApart] = useState(false)

    // Delete room
    const [responseDeleteRoom, setResponseDeleteRoom] = useState(false)

    let { id } = useParams();


    useEffect(() => {
        setLoading(true)
        getApartmentDetails(setApartment, setLoading, id)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (responseDeleteRoom || responseDeleteApart) {
            window.location.reload(false);
        }
    }, [responseDeleteRoom, responseDeleteApart])


    console.log(apartment, responseDeleteApart, responseDeleteRoom)

    return (
        <div id="apartment-details">

            <Cursor />
            <div>
                <h1>Consultez les détails de l'hôtel ainsi que les chambres disponibles</h1>
            </div>

            <div>
                <a className="btn-green" href={"/room/create/" + id}>Créer une chambre</a>
            </div>

            {loading ? <Loader /> : apartment ?
                <div className="apartment">

                    <img className="apartment-image" src={HotelImage} alt="vue extérieur d'un hôtel" />

                    <p className="apartment-name">{apartment?.name}</p>

                    <div className="apartment-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                        </svg>
                        <p>{apartment?.street} , {apartment?.zipCode} {apartment?.city}</p>
                    </div>

                    <div className="d-flex flex-direction-column">
                        <a className="btn-green mb-3" href={"/apartment/update/" + apartment.id}>Modifier</a>
                        <button className="btn-red" onClick={() => deleteApartment(setResponseDeleteApart, id)}>Supprimer</button>
                    </div>
                </div>
                : <p className="alert alert-success no-data">Aucun appartement n'a été trouvé</p>
            }


            <div className="apartments">
                {loading ? <Loader /> : apartment.rooms ?
                    apartment.rooms.map((room, key) => {
                        return <div className="apartment" key={key} >

                            <img className="apartment-image" src={RoomImage} alt="vue extérieur d'un hôtel" />

                            <p className="apartment-name">Chambre N° {room?.number}</p>

                            <div className="apartment-address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-rulers" viewBox="0 0 16 16">
                                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                                </svg>
                                <p>{room?.area} mètres carré</p>
                            </div>

                            <div className="apartment-address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-euro" viewBox="0 0 16 16">
                                    <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                                </svg>
                                <p>{room?.price} €</p>
                            </div>

                            <div className="d-flex flex-direction-column">
                                <a className="btn-green mb-3" href={"/room/update/" + room.id}>Modifier</a>
                                <button className="btn-red" onClick={() => deleteRoom(setResponseDeleteRoom, room.id)}>Supprimer</button>
                            </div>
                        </div>
                    })

                    : <p className="alert alert-success no-data">Aucune chambre n'a été trouvé</p>
                }
            </div>

        </div >
    )
}
