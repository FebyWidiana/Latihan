import axios from "axios";

const apiClient = () => {
    const baseUrl = process.env;
    console.log(baseUrl);
    const instance = axios.create({
        baseURL: baseUrl,
    });
    return instance
}
export default apiClient;