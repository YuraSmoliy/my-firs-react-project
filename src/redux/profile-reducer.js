import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, massage: "HI", likes_count: 0},
        {id: 2, massage: "How are you?", likes_count: 1},
        {id: 3, massage: "Good, and you?", likes_count: 1},
        {id: 4, massage: "Fine!", likes_count: 7},
        {id: 5, massage: "Great!", likes_count: 6},
        {id: 6, massage: "Bye!", likes_count: 5},
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        massage: action.newPostText,
                        likes_count: "6",
                    },
                ],
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p=>p.id != action.postId)}
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    };
};

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (!response.data.resultCode) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;
