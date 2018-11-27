import { databaseRef } from "../config/firebase";
import { FETCH_USERS,FETCH_POSTS } from "./types";

export const addUser = (newUser) => async dispatch => {
    let newUserId = databaseRef.child('users').push().key;
    localStorage.setItem('userId',newUserId);
    databaseRef
        .child('users')
        .child(newUserId)
        .set(newUser);
};
export const createPost = (newPost) => async dispatch => {
    databaseRef
        .child('posts')
        .push()
        .set(newPost);
};
export const fetchUsers = (cb = ()=>{}) => async dispatch => {
    databaseRef.child('users').on("value", snapshot => {
        dispatch({
          type: FETCH_USERS,
          payload: snapshot.val()
        });
        cb();
    });
};
export const fetchPosts = (cb = ()=>{}) => async dispatch => {
    databaseRef.child('posts').on("value", snapshot => {
        dispatch({
          type: FETCH_POSTS,
          payload: snapshot.val()
        });
        cb();
    });
};
export const updatePopularity = (id,newLikes, newDislikes) => async dispatch => {
    databaseRef
        .child('posts/'+id+"/likes")
        .set(newLikes);

    databaseRef
        .child('posts/'+id+"/dislikes")
        .set(newDislikes);
};

export const deletePost = (id) => async dispatch => {
    databaseRef
        .child('posts/'+id)
        .set(null);
};

export const updateContentPost = (id,newContent) => async dispatch => {
    databaseRef
        .child('posts/'+id+"/content")
        .set(newContent);
};