import {IS_AUTH,STORE_USER} from "./ActionTypes";

const initState = {
  IsAuth: false,
  User: null,
};

export const Reducer = (store = initState, { type, payload }) => {
  switch (type) {
    case IS_AUTH:
      return { ...store, IsAuth: payload };
    case STORE_USER:
      return { ...store, User: payload };
    default:
      return { ...store };
  }
};
