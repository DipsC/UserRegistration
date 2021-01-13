import { USERS, LOGIN_USER } from "./actions";

export const users = (state = [], action) => {
  switch (action.type) {
    case USERS:
      return action.data;

    default:
      return state;
  }
};

export const loginUser = (state = [], action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.data;

    default:
      return state;
  }
};
