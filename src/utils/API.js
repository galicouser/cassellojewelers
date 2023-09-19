import axios from "axios";


const axiosAPI = axios.create({
    baseURL: "https://jewelapi.onrender.com/",
});

export const getProducts = async () => {
    try {
        const baseUrl = "/api/data/";

        const url = `${baseUrl}`;

        return axiosAPI.get(url);
    } catch (err) {
        console.log("Error Validating User: ", err);
    }
};


export const getSingleProduct = async (id) => {
    try {
        const baseUrl = "https://jewelapi.onrender.com/api/single-data?id=";
        const queryParams = new URLSearchParams({
            id: id
        });

        const url = `${baseUrl}?${queryParams.toString()}`;

        console.log(url); // This will log the correct URL for debugging purposes

        return axiosAPI.get(url);
    } catch (err) {
        console.log("Error Validating User: ", err);
    }
};