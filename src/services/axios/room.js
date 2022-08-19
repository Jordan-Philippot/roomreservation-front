import axios from 'axios';

// const API_KEY = "my_key";
const BASE_URI = 'https://localhost:8000/'

const headers = {
    'Content-Type': 'application/json',
}

// ----- Get Apartments ----- 
export async function getRooms(setResponse, setLoading) {
    await axios({
        url: BASE_URI + 'room/get_all',
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                setResponse(response.data.rooms)
                setLoading(false)
            }
        }, (err) => {
            setResponse(err)
            setLoading(false)
        });
}

// ----- Get Apartment details ----- 
export async function getRoomDetails(setResponse, setLoading, id) {
    await axios({
        url: BASE_URI + 'room/' + id,
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                setResponse(response.data.room[0])
                setLoading(false)
            }
        }, (err) => {
            setResponse(err)
            setLoading(false)
        });
}


// ----- Delete Apartment  ----- 
export async function deleteRoom(setResponse, id) {
    await axios({
        url: BASE_URI + 'room/delete/' + id,
        headers: headers,
    })
        .then((response) => {
            if (response) {
                setResponse(true)
            }
        }, (err) => {
            setResponse(err)
        });
}

// ----- Delete Apartment  ----- 
export async function updateRoom(data, setResponse, setErrors, id) {
    await axios({
        method: "put",
        url: BASE_URI + 'room/update/' + id,
        headers: headers,
        data: data
    })
        .then((response) => {
            if (response.data.errors) {
                setErrors(response.data.errors)
            } else {
                setResponse(true)
            }
        }, (err) => {
            setResponse(err)
        });
}

// ----- Update Apartment  ----- 
export async function createRoom(data, setErrors, setResponse, id) {
    await axios({
        method: "post",
        url: BASE_URI + 'create/room/' + id,
        headers: headers,
        data: data
    })
        .then((response) => {
            if (response.data.errors) {
                setErrors(response.data.errors)
            } else {
                setResponse(true)
            }
        }, (err) => {
            setResponse(err)
        });
}