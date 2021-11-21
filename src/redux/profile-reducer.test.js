import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state = {
    posts: [
        {id: 1, massage: "HI", likes_count: 0},
        {id: 2, massage: "How are you?", likes_count: 1},
        {id: 3, massage: "Good, and you?", likes_count: 1},
        {id: 4, massage: "Fine!", likes_count: 7},
    ],}

test('Length of posts should be incremented', () => {
    let action = addPostActionCreator('new test post')
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].massage).toBe('new test post');
});

test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(3);
});

