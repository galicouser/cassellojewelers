import axios from "axios";

const axiosAPI = axios.create({
    // baseURL: "https://jewelapi.onrender.com/",
    // baseURL: "http://localhost:5252",
    baseURL: "https://jeweler-auth.onrender.com",
});


export const getProductsMongo = async () => {
    try {
        return await axiosAPI.get('/products/');
    } catch (err) {
        console.log("Error Getting GeoLocation AR", err);
    }
};


export const getProductById = async (id) => {
    try {
        return await axiosAPI.get('/products/get-product-id/?id=' + id);
    } catch (err) {
        console.log("Error Getting GeoLocation AR", err);
    }
};

export const addProduct = async (name, price, category, company, description, shipping, colors, images) => {
    try {
        const response = await axiosAPI.post("/products/add-product", {
            "name": name,
            "price": price,
            "category": category,
            "company": company,
            "description": description,
            "shipping": shipping,
            "colors": colors,
            "images": images
        });
        return response;
    } catch (err) {
        console.log("Error signing up", err);
        return { error: "An error occurred while signing up." };
    }
};


export const editProduct = async (id, name, price, description, colors, images, category, company) => {
    try {
        const response = await axiosAPI.post("/products/edit-product", {
            "id": id,
            "name": name,
            "price": price,
            "description": description,
            "colors": colors,
            "images": images,
            "category": category,
            "company": company,
        });
        return response;
    } catch (err) {
        console.log("Error signing up", err);
        return { error: "An error occurred while signing up." };
    }
};

