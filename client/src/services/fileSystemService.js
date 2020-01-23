import axios from "axios";

const axios_instance = axios.create({
    baseURL: " http://127.0.0.1:8082",
    withCredentials: true,
});

export const createFolderService = (userId) => {
    return axios_instance.get("/createFolder?userId=" + userId).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}

export const createUserService = (userId) => {
    return axios_instance.get("/createUser?userId=" + userId).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}

export const getFiles = (path) => {
    console.log(path)
    return axios_instance.get("/ls?folder=" + path.dir).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}