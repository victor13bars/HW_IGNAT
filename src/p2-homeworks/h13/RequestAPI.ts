import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const authAPI = {
    auth(data: AuthDataType) {
        return instance.post<ResponseDataType>(`auth/test`, data)
    }
}

type AuthDataType = {
    success: boolean
}

type ResponseDataType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: any
}