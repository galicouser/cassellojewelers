import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://jeweler-auth.onrender.com/",
    // baseURL: "http://localhost:5252",
});

export const checkout = async (name, products) => {
    const cartItems = products.map((product) => ({
        name: product.name,
        desc: `Brand: ${product.name}`,
        id: product.id,
        price: product.price,
        cartQuantity: product.amount,
    }));
    console.log(products)

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
        cartItems: cartItems, // Assign the populated 'cartItems' array here
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