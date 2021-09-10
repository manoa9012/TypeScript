export interface User {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export interface UserAdd {
  name: string;
  job: string;
}

export const UserActionsTypes = {
  GET_ALL: "GET_ALL",
  DELETE_USER: "DELETE_USER",
  ADD_USER: "ADD_USER",
  UPDATE_USER: "UPDATE_USER",
  GET_USER: "GET_USER",
  EDIT_USER: "EDIT_USER",
};
