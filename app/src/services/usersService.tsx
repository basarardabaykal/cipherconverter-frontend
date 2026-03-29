import { api } from "./api";
import { toast } from "react-hot-toast";

const APP_NAME = "auth"

export const usersService = {
    async register(data: any) {
        try {
            const response = await api.post(`${APP_NAME}/register/`, data)
            if(response.data.status_message != "Success") {
                toast.error(response.data.message)
                return null
            }
            return response
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async login(data: any) {
        try {
            const response = await api.post(`${APP_NAME}/login/`, data)
            if(response.data.status_message != "Success") {
                toast.error(response.data.message)
                return null
            }
            return response
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async logout(data: any) {
        try {
            const response = await api.post(`${APP_NAME}/logout/`, data)
            if(response.data.status_message != "Success") {
                toast.error(response.data.message)
                return null
            }
            return response
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async refreshToken(data: any) {
        try {
            const response = await api.post(`${APP_NAME}/token/refresh/`, data)
            if(response.data.status_message != "Success") {
                toast.error(response.data.message)
                return null
            }
            return response
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async me() {
        try {
            const response = await api.get(`${APP_NAME}/me/`)
            if(response.data.status_message != "Success") {
                toast.error(response.data.message)
                return null
            }
            return response
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    }
}