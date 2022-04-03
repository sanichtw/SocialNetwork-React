import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "19ba5794-dc60-4a1e-a520-608159991841"
    }
})

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data;
    }
};

export const authAPI = {
    async auth() {
        const response = await instance.get(`auth/me`);
        return response.data.data;
    }
};

export const followAPI = {
    async follow(id) {
        const response = await instance.post(`follow/${id}`)
        return response
    },
    async unfollow(id) {
        const response = await instance.delete(`follow/${id}`)
        return response
    }
};