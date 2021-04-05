const SET_LOADING = "SET-LOADING";

const initState = {
    loading: false
};

export type InitStateType = {
    loading: boolean
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {
                ...state,
                loading: action.loading
            };
        }
        default:
            return state;
    }
};

export type LoadingACType = {
    type: "SET-LOADING",
    loading: boolean
}
export const loadingAC = (loading: boolean): LoadingACType => {
    return {
        type: SET_LOADING,
        loading
    }
}; // fix any