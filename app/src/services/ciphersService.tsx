import { api } from "./api";
import { toast } from "react-hot-toast";

const APP_NAME = "ciphers"

export const ciphersService = {
	async caesar(data: any) {
		try {
			const response = await api.post(`${APP_NAME}/caesar/`, data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			})
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

	async affine(data: any) {
		try {
			const response = await api.post(`${APP_NAME}/affine/`, data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			})
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
