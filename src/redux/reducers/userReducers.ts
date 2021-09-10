import { User, UserActionsTypes } from "../types/userTypes";
import { Action } from "../types/interfaces";
const initialState = {
  users: [] as User[],
  user: {} as User,
};

const userReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case UserActionsTypes.GET_ALL:
      return { ...state, users: payload };
    case UserActionsTypes.DELETE_USER:
    case UserActionsTypes.ADD_USER:
    case UserActionsTypes.UPDATE_USER:
      return { ...state, loading: false };
    case UserActionsTypes.GET_USER:
      return { ...state, user: payload, loading: false };

    default:
      return state;
  }
};

export default userReducer;
