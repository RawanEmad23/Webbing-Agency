import axios from "axios";

export const baseUrl = "http://192.168.1.2:1337";
export const api = axios.create({
    baseURL: `${baseUrl}/api`,
    headers: {
        "Content-Type": "application/json",
    },
})