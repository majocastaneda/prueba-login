import AsyncStorage from "@react-native-async-storage/async-storage";

const apiUrl = 'http://186.4.129.103:8085/api';

export const loginWithEmailAndPassword = async (email, password) => {

    const url = apiUrl + '/Login/auth'
    console.log(url)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userName":email, "password":password })
    })

    if (!response.ok) {
        if (response.status == 401) {
            console.log("Unauthorized")
        }
        else {
            const message = `An error has ocurred: ${response.status}`;
            throw new Error(message);
        }
    }else{
        let data = await response.json()
        _setStorageToken("STORAGE_KEY", JSON.stringify(data))
    }
    return response;
};