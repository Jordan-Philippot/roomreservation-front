import axios from 'axios';

// const API_KEY = "my_key";
const BASE_URI = 'https://localhost:8000/'

const headers = {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
}

// ----- Get Apartments ----- 
export async function getApartments(setResponse, setLoading) {
    await axios({
        url: BASE_URI + 'apartment/get_all',
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                setResponse(response.data.apartments)
                setLoading(false)
            }
        }, (err) => {
            setResponse(err)
            setLoading(false)
        });
}

// ----- Get Apartment details ----- 
export async function getApartmentDetails(setResponse, setLoading, id) {
    await axios({
        url: BASE_URI + 'apartment/' + id,
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                setResponse(response.data.apartment[0])
                setLoading(false)
            }
        }, (err) => {
            setResponse(err)
            setLoading(false)
        });
}


// ----- Delete Apartment  ----- 
export async function deleteApartment(setResponse, id) {
    await axios({
        url: BASE_URI + 'apartment/delete/' + id,
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

// ----- Update Apartment  ----- 
export async function updateApartment(data, setErrors, setResponse, id) {
    await axios({
        method: "put",
        url: BASE_URI + 'apartment/update/' + id,
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
export async function createApartment(data, setErrors, setResponse) {
    await axios({
        method: "post",
        url: BASE_URI + 'create/apartment',
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