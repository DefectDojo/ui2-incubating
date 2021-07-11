import {baseURL} from "./api"


export function authenticate(username, password){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            "username": username,
            "password": password
        })
    };

    return fetch(baseURL+"api-token-auth/", requestOptions)
        .then(response => {
            if(!response.ok){
                throw new Error("Bad response from server")
            }
            return response;
        }).then(response => response.json())
        .then(data => localStorage.setItem("token",data["token"]))
        .catch((error) => {
            console.log(error);
        })

}