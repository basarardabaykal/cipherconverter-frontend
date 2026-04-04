import { api } from "./api";
import { toast } from "react-hot-toast";

const APP_NAME = "auth"

export const usersService = {
    async register(data: any) {
        try {
            return await api.post(`${APP_NAME}/register/`, data)
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async login(data: any) {
        try {
            return await api.post(`${APP_NAME}/login/`, data)
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async logout(data: any) {
        try {
            return await api.post(`${APP_NAME}/logout/`, data)
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async refreshToken(data: any) {
        try {
            return await api.post(`${APP_NAME}/token/refresh/`, data)
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    },

    async me() {
        try {
            return await api.get(`${APP_NAME}/me/`)
        } catch (error: any) {
            toast.error("Server connection failed.")
            return null
        }
    }
}