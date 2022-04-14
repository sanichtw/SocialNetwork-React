import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "19ba5794-dc60-4a1e-a520-608159991841"
    }
})

// Users
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

// Auth
export const authAPI = {
    async auth() {
        const response = await instance.get(`auth/me`);
        return response.data.data;
    },

    async logIn(email, password, rememberMe = false) {
        const response = await instance.post(`auth/login`, { email, password, rememberMe });
        return response.data;
    },

    async logOut() {
        const response = await instance.delete(`auth/login`);
        return response.data;
    },
};

// Profile
export const profileAPI = {
    async getProfile(userId) {
        const response = await instance.get(`profile/${userId}`)
        return response
    },

    async getProfileStatus(userId) {
        const response = await instance.get(`profile/status/${userId}`)
        return response
    },

    async updateProfileStatus(status) {
        const response = await instance.put(`profile/status`, { status })
        return response
    },
};
