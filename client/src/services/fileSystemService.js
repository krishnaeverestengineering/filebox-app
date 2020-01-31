import axios from "axios";
import { getBearerToken } from "../helpers";

const axios_instance = axios.create({
    baseURL: " http://127.0.0.1:9091",
    withCredentials: true,
});

export const createFolderService = (data) => {
    return axios_instance.post("/create-folder", data, {
        headers: {
            "Authorization": getBearerToken()
        }
    }).then(res => {
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
    return axios_instance.get("/ls?path=" + path.dir, {
        headers: {
            "Authorization": getBearerToken()
        }
    }).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}

export const deleteFolderService = (file) => {
    return axios_instance.post("/del", {
        name: file.data.filename,
        fid: file.data.id
    }, {
        headers: {
            "Authorization": getBearerToken()
        }
    }).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}

export const renameFolderService = (file) => {
    return axios_instance.get("/renm=" + file.id, {
        headers: {
            "Authorization": getBearerToken()
        }
    }).then(res => {
        return res;
    }).catch(e => {
        return e;
    });
}