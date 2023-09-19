import axios from "axios";

const axiosAPI = axios.create({
    // baseURL: "https://jewelapi.onrender.com/",
    baseURL: "http://localhost:5252",
    // baseURL: "https://jeweler-auth.onrender.com",
});


export const getProductsMongo = async () => {
    try {
        return await axiosAPI.get('/products/');
    } catch (err) {
        console.log("Error Getting GeoLocation AR", err);
    }
};