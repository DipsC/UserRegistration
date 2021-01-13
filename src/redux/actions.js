export const USERS = 'users/SET';
export const LOGIN_USER = 'loginuser/SET';

export const usersSet = data => ({
  type: USERS,
  data
});

export const loginUsersSet = data => ({
  type: LOGIN_USER,
  data
});

