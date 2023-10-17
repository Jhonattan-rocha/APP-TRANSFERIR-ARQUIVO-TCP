import axios from 'axios';
import { baseURL, ApiPort } from '../config/config';

export default axios.create({
    baseURL: `http://${baseURL}:${ApiPort}/`,
    headers: {"Content-Type":"application/json"},
});
