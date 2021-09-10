import { Action } from "../types/interfaces";
import axios from "axios";
import { User, UserActionsTypes, UserAdd } from "../types/userTypes";
import { Dispatch } from "redux";

const getUsers = (users: User[]) => ({
  type: UserActionsTypes.GET_ALL,
  payload: users,
});
const userDeleted = () => ({
  type: UserActionsTypes.DELETE_USER,
});
const userAdd = () => ({
  type: UserActionsTypes.ADD_USER,
});
const userUpdated = () => ({
  type: UserActionsTypes.UPDATE_USER,
});
const getUser = (user: User) => ({
  type: UserActionsTypes.GET_USER,
  payload: user,
});

export const loadUsers = (num?: number) => (dispatch: Dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API}/users?per_page=${num}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getUsers(res.data.data));
    })
    .catch((error) => console.log(error));
};

export const deleteUser = (id: number | undefined) => (dispatch: Dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_API}/user/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(userDeleted());
      // dispatch(loadUsers());
    })
    .catch((error) => console.log(error));
};
export const addUser = (user: UserAdd) => (dispatch: Dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API}/user`, user)
    .then((res) => {
      console.log(res.data);
      dispatch(userAdd());
      // dispatch(loadUsers());
    })
    .catch((error) => console.log(error));
};

export const getSingleUser = (id: number) => (dispatch: Dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API}/users/2`)
    .then((res) => {
      console.log(res.data);
      dispatch(getUser(res.data.data));
    })
    .catch((error) => console.log(error));
};
export const UpdateUser = (user: User, id: number) => (dispatch: Dispatch) => {
  axios
    .put(`${process.env.REACT_APP_API}/users/2`, user)
    .then((res) => {
      console.log(res.data);
      dispatch(userUpdated());
    })
    .catch((error) => console.log(error));
};
