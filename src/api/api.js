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
    },
    async follow(userId) {
        const response = await instance.post(`follow/${userId}`)
        return response
    },
    async unfollow(userId) {
        const response = await instance.delete(`follow/${userId}`)
        return response
    }
};

export const authAPI = {
    async auth() {
        const response = await instance.get(`auth/me`);
        return response.data.data;
    }
};

export const profileAPI = {
    async getProfile(userId) {
        debugger
        const response = await instance.get(`profile/${userId}`)
        return response
    }
}
