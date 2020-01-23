import axios from "axios";

var instance = axios.create({
    baseURL: "http://127.0.0.1:8081",
    withCredentials: true,
})

export const googleSignInInit = () => {
    console.log("ini")
    const CLIENT_ID = "422393599134-73gn0s2am4dhu7unaaipfecuhr62a69m.apps.googleusercontent.com";
    const promise = new Promise(function(resolve, reject) {
        window.gapi.load('client:auth2', async () => {
            window.gapi.client.init({
                clientId: CLIENT_ID,
                scope: "email",
                //ux_mode : "redirect",
                //redirect_uri: "http://localhost:3000/login"

            }).then(() => {
                resolve(window.gapi.auth2.getAuthInstance())
            });
        })
      });

      return promise;
}

//main
export const checkSignIn = () => {
    return instance.get("/auth").then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

export const authenticateUserToServerService = (userId) => {
    console.log(userId);
    return axios.get("http://127.0.0.1:9090/auth?userId=" + userId).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}