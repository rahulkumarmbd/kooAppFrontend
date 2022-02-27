import {IS_AUTH,STORE_USER} from "./ActionTypes.js";

export const Is_Auth = (payload) => {
    return {
        type:IS_AUTH,
        payload,
    }
}

export const Store_User = (payload) => {
    return {
        type:STORE_USER,
        payload,
    }
}
