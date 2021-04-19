import {authAPI} from "./RequestAPI";
import {Dispatch} from "react";
import {loadingAC, LoadingACType} from "../h10/bll/loadingReducer";

const initState = {
    success: true,
    error: ""
};

export type InitStateType = {
    success: boolean,
    error: string
}

export const authReducer = (state: InitStateType = initState, action: AllType): InitStateType => { // fix any
        switch (action.type) {
            case "AUTH": {
                return {
                    ...state,
                    success: action.success
                }
            }
            case "ERROR": {
                return {
                    ...state,
                    error: action.error
                }
            }
            default:
                return state;

        }
    }
;
export type AuthType = {
    type: "AUTH",
    success: boolean
}
export const authAC = (success: boolean): AuthType => {
    return {
        type: "AUTH",
        success
    }
};

export type ErrorType = {
    type: "ERROR",
    error: string
}
export const errorAC = (error: string): ErrorType => {
    return {
        type: "ERROR",
        error
    }
};

type AllType = ErrorType | AuthType | LoadingACType;

export const getUsersThunkCreator = (success: boolean) => async (dispatch: Dispatch<AllType>) => {
    dispatch(loadingAC(true));
    let data = await authAPI.auth({success: success})
        .then(res => {
            if (res.status === 200) {
                dispatch(errorAC(res.data.errorText));
            } else {
                dispatch(errorAC("SERVER ERROR"));
            }
        })
        .catch((error) => {
            dispatch(errorAC(error.response ? error.response.data.errorText : error.message));
        })
        .finally(() => {
            dispatch(loadingAC(false));
        });


}


// fix any