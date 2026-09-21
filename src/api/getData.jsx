import axios from "axios";

export const getData = async () => {
    try {
        const response = await axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        });
        return response.data;
    } catch (error) {
        console.log("Error", error);
    }
}