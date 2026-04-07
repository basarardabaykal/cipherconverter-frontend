import { api } from "./api";
import { toast } from "react-hot-toast";

const APP_NAME = "auth"

const handleError = (error: any) => {
    if (error.response?.data) {
        const data = error.response.data;
        if (data.detail) {
            toast.error(data.detail);
        } else if (typeof data === "object") {
            Object.values(data).forEach((err: any) => {
                if (Array.isArray(err)) toast.error(err[0]);
                else if (typeof err === "string") toast.error(err);
            });
        }
        return error.response;
    }
    toast.error("Server connection failed.");
    return null;
};

export const usersService = {
    async register(data: any) {
        try {
            return await api.post(`${APP_NAME}/register/`, data);
        } catch (error: any) {
            return handleError(error);
        }
    },

    async login(data: any) {
        try {
            return await api.post(`${APP_NAME}/login/`, data);
        } catch (error: any) {
            return handleError(error);
        }
    },

    async logout(data: any) {
        try {
            return await api.post(`${APP_NAME}/logout/`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } catch (error: any) {
            return handleError(error);
        }
    },

    async refreshToken(data: any) {
        try {
            return await api.post(`${APP_NAME}/token/refresh/`, data);
        } catch (error: any) {
            return handleError(error);
        }
    },

    async me() {
        try {
            return await api.get(`${APP_NAME}/me/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            });
        } catch (error: any) {
            if (error.response) return error.response;
            toast.error("Server connection failed.");
            return null;
        }
    }
}