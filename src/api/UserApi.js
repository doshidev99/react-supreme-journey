import axiosClient from "./axiosClient";

const UserApi = {
	register(data) {
		const url = '/products';
		return axiosClient.post(url, data)
	},
}

export default UserApi;