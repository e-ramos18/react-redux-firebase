import actionTypes from "./types";
import { database } from "../../database/config";
import { ref, get, set, child, remove } from "firebase/database";

export const startFetchingUsers = () => {
  return (dispatch) => {
    const dbRef = ref(database);
    get(child(dbRef, `users`))
      .then((snapshot) => {
        let users = [];
        if (snapshot.exists()) {
          snapshot.forEach((childsnap) => {
            users.push(childsnap.val());
          });
        }
        dispatch(fetchUsers(users));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startAddingUser = (user) => {
  return (dispatch) => {
    set(ref(database, `users/${user.id}`), {
      id: user.id,
      name: user.name,
      email: user.email,
    })
      .then(() => {
        dispatch(addUser(user));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startUpdatingUser = (user) => {
  return (dispatch) => {
    set(ref(database, `users/${user.id}`), {
      id: user.id,
      name: user.name,
      email: user.email,
    })
      .then(() => {
        dispatch(updateUser(user));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startRemovingUser = (id) => {
  return (dispatch) => {
    remove(ref(database, `users/${id}`))
      .then(() => {
        dispatch(deleteUser(id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// Actions
export const fetchUsers = (users) => {
  return {
    type: actionTypes.FETCH_USERS,
    users,
  };
};

export const addUser = (user) => {
  return {
    type: actionTypes.ADD_USER,
    user,
  };
};

export const updateUser = (updatedUser) => {
  return {
    type: actionTypes.UPDATE_USER,
    updatedUser,
  };
};

export const deleteUser = (userId) => {
  return {
    type: actionTypes.DELETE_USER,
    userId,
  };
};

export const setUsertoUpdate = (userId) => {
  return {
    type: actionTypes.SET_USER_TO_UPDATE,
    userId,
  };
};
