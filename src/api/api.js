import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'API-KEY': 'c0324078-1dd3-4614-bbef-e41473ebabe2'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(
                `users?page=${currentPage}&count=${pageSize}`,
            ).then(response => response.data)
    },

    follow(userId) {
        return instance
            .post(
                `follow/${userId}`,

            )
    },

    unfollow(userId) {
        return instance
            .delete(
                `follow/${userId}`,
            )
    },

    getProfile(userId){
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance
            .get(
                `profile/` + userId
            )
    },

    getStatus(userId){
        return instance
            .get(
                `profile/status/` + userId

            )
    },
    updateStatus(status){
        return instance
            .put(
                `profile/status/`,
                {status: status}
            )
    }
}

export const authAPI = {
    me( ) {
        return instance
            .get(
                `auth/me`
            )
    },

    login( email, password, rememberMe=false ) {
        return instance
            .post(
                `auth/login`,
                {email, password, rememberMe}
            )
    },
    logout( email, password, rememberMe=false ) {
        return instance
            .delete(
                `auth/login`
            )
    },


}