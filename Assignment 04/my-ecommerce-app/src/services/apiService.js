import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Adjust this URL to match your backend's base URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login/signin`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};