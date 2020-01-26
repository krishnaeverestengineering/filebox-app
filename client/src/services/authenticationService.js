import axios from "axios";
import { getBearerToken } from "../helpers";

var instance = axios.create({
    baseURL: "http://127.0.0.1:9091",
    withCredentials: true,
})

export const getAccessToken = () => {
    return instance.get("/token").then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

export const authenticateUserToServerService = () => {
    return instance.get("/auth", {
        headers: {
            Authorization: getBearerToken(),
        }
    }).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}