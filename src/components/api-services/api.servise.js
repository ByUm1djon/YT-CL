import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': '96867136aemsh9c6bd0ebe26d99bp1a5703jsn6d52a155c5ce',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}


