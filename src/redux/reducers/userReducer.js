import actionTypes from "../actions/types";

const initialState = {
  users: [],
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.users,
      };
    case actionTypes.ADD_USER:
      let newUsers = [...state.users];
      newUsers.push(action.user);
      return {
        ...state,
        users: newUsers,
      };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
        loading: false,
      };
    case actionTypes.UPDATE_USER:
      const index = state.users.findIndex(
        (u) => u.id === action.updatedUser.id
      );
      const updatedUsers = [...state.users];
      updatedUsers[index] = action.updatedUser;
      return {
        ...state,
        users: updatedUsers,
        loading: false,
      };

    case actionTypes.SET_USER_TO_UPDATE:
      const user = state.users.find((u) => u.id === action.userId);
      return {
        ...state,
        user: user,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
