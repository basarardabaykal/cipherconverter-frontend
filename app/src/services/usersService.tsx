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
    }
}