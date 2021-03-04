import axios from 'axios';

const KEY = 'AIzaSyBrZ-jvL3LDxMcTCH8Sul6NVVNMjkpgzhg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    } 
});