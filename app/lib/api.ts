import axios from "axios";

export let token : any ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjA3MjExMjEsImV4cCI6MTcyMDcyNDcyMX0.62un3HO8yvtvplz2O-lfepAQu1zPA2MRMffM2krLn6c'

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export function setAuthorize(token:any) {

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

}

export async function getChats(walletAddress:any) {
    try {
        const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/chat/${walletAddress}`
        
        const response = await axios.get(url)
        if (!response) {
            throw new Error("Server Error:")
        }
      
        return response.data
    }
    catch (err:any) {
        return new Error(err)
    }

}

export async function createChat(walletAddress:any) {
    try {
        const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/chat`
        const response = await axios.post(url,{wallletAddress:walletAddress})
        if (!response) {
            throw new Error("Server Error:")
        }

        return response
    }
    catch (err:any) {
        throw new Error(err)
    }

}


export async function createMessage(data:any) {
    try {
        const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/chat`
        const response = await axios.post(url,data)
        if (!response) {
            throw new Error("Server Error:")
        }

        return response
    }
    catch (err:any) {
        throw new Error(err)
    }

}

export async function getMessage(chat_id:any) {
    try {
        const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/message/:${chat_id}`
        const response = await axios.get(url)
        if (!response) {
            throw new Error("Server Error:")
        }

        return response
    }
    catch (err:any) {
        throw new Error(err)
    }

}