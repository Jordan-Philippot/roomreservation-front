import axios from 'axios';

const BASE_URI = 'https://localhost:8000/'

const headers = {
    'Content-Type': 'application/json',
}

// ----- Get User profile ----- 
export async function getDefaultUser(setResponse, setLoading) {
    await axios({
        url: BASE_URI + 'user/default',
        headers: headers,
    })
        .then((response) => {
            if (response.data) {
                setResponse(response.data.user[0])
                setLoading(false)
            }
        }, (err) => {
            setResponse(err)
            setLoading(false)
        });
}
