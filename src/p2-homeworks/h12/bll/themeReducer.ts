export type themeType ='dark' | 'red'| 'some';
const initState = {
    theme: 'red' as const
};

export type InitStateType = {
    theme: themeType
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeCType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-THEM": {
            return{
                ...state,
                theme:action.them
            }
        }
        default:
            return state;
    }
};
export type ChangeThemeCType = {
    type: "SET-THEM",
    them: themeType
}
export const changeThemeC = (them: themeType): ChangeThemeCType => {
    return {
        type: "SET-THEM",
        them
    }
}; // fix any