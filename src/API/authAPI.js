import axios from "axios";

const axiosAPI = axios.create({
    // baseURL: "https://jewelapi.onrender.com/",
    // baseURL: "http://localhost:5252",
    baseURL: "https://jeweler-auth.onrender.com",
});

export const signupUser = async (email, password, username) => {

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

export const editShiping = async (userName, address, city, province, country, postCode) => {

    try {
        const response = await axiosAPI.post("/auth/edit-shipping", {
            userName: userName,
            address: address,
            city: city,
            province: province,
            country: country,
            postCode: postCode
        });
        return response.data;
    } catch (err) {
        console.log("Error signing up", err);
        return { error: "An error occurred while signing up." };
    }
};

export const loginUser = async (username, password) => {
    console.log(username)
    const response = await axiosAPI.post("/auth/login-user", {
        userName: username,
        password: password,
    });
    return response.data;
};


export const updateProfilePicture = async (username, picture) => {
    const response = await axiosAPI.post("/auth/change-profile-picture", {
        userName: username,
        newProfilePictureUrl: picture,
    })
        .then((response) => {
            console.log("Profile picture updated:", response.data.message);
            console.log("Updated user data:", response.data.user);
        })
        .catch((error) => {
            console.error("Error changing profile picture:", error.response.data.message);
        });

    return response;
};

export const initiateResetPassword = async (email) => {
    try {
        return await axiosAPI.post("/auth/forgot-password", {
            email: email,
        });
    } catch (err) {
        console.log("Error! initiate reset password : ", err);
        return err;
    }
};

export const resetPassword = async (email, verificationToken, password) => {
    try {
        return axiosAPI.post("/auth/reset-password", {
            email: email,
            verificationToken: verificationToken,
            password: password,
        });
    } catch (err) {
        console.log("Error resetting password : ", err);
    }
};

export const verifyToken = async (email, verificationToken) => {
    try {
        const baseUrl = "https://nocableneeded-auth.onrender.com/auth/api/verify";
        const queryParams = new URLSearchParams({
            email: email,
            verify_token: verificationToken,
        });

        const url = `${baseUrl}?${queryParams.toString()}`;

        console.log(url); // This will log the correct URL for debugging purposes

        return axiosAPI.get(url);
    } catch (err) {
        console.log("Error Validating User: ", err);
    }
};

// const approvalLink = `https://nocableneeded-auth.onrender.com/auth/api/verify?email=${encodeURIComponent(
//       receiverEmail // Use 'email' from route parameters
//     )}&verify_token=${encodeURIComponent(verify_token)}`;