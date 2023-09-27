import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://jeweler-auth.onrender.com/",
    // baseURL: "http://localhost:5252",
});

export const checkout = async (name) => {
    const requestData = {
        order_id: "1",
        customer_name: name,
        customer_phone: "(732) 487-8977",
        customer_email: "fahad@richmondtt.com",
        description: "Casetabs Organization",
        shipping: {
            address: {
                city: "New Jersey",
                country: "US",
                line1: "703 Gregorys Way Voorhees shipping address",
                line2: "alternative shipping address",
                postal_code: "08043",
                state: "PA",
            },
            shipping_name: "Fahad Bashir",
            shipping_phone: "(732) 487-8977",
        },
        billing: {
            address: {
                city: "New Jersey",
                country: "US",
                line1: "703 Gregorys Way Voorhees billing address",
                line2: "alternative billing address",
                postal_code: "08043",
                state: "PA",
            },
        },
        cartItems: [
            {
                name: "OMEGA La Magique Scarface Edition",
                desc: "Brand: Omega",
                id: "BENR91",
                price: "14000",
                cartQuantity: "1",
            },
            {
                name: "OMEGA La Magique Golden",
                desc: "Brand: Omega",
                id: "BENR90",
                price: "13709",
                cartQuantity: "1",
            },
        ],
    };

    try {
        const response = await axiosAPI.post("/api/create-checkout", {
            orderData: requestData, // Add the JSON data here
        });
        return response.data;
    } catch (err) {
        console.log("Error signing up", err);
        return { error: "An error occurred while signing up." };
    }
};