import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://jewelapi.onrender.com/",
    // baseURL: "http://localhost:5252",
});

export const checkout = async (email, password, username) => {

    try {
        const response = await axiosAPI.post("/auth/signup-user", {
            email: email,
            password: password,
            userName: username,
        });
        return response.data;
    } catch (err) {
        console.log("Error signing up", err);
        return { error: "An error occurred while signing up." };
    }
};

