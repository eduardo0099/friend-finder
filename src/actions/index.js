import { databaseRef } from "../config/firebase";
import { FETCH_USERS } from "./types";

export const addUser = (newUser) => async dispatch => {
    databaseRef
        .child('users')
        .push()
        .set(newUser);
};

export const fetchUsers = () => async dispatch => {
    databaseRef.child('users').on("value", snapshot => {
        dispatch({
          type: FETCH_USERS,
          payload: snapshot.val()
        });
    });
};