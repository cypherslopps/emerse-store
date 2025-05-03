import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API
});

axios.interceptors.request.use(config => {
    const token = JSON.parse(localStorage.getItem("tk_as") as string) ?? null;
    const accessToken = token ? token.accessToken : null;

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
        config.headers.Authorization = null;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axios;