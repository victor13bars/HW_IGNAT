import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from "@material-ui/core";
import s from "./../h12/HW12.module.css"
import {themeType} from "../h12/bll/themeReducer";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector((state: AppStoreType) => state.loading.loading);
    const theme = useSelector<AppStoreType, themeType>((state) => state.theme.theme)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s[theme] + ' ' + s.column}>
            <span className={s[theme + '-text']}>
                homeworks 10
            </span>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <CircularProgress color="secondary"/>
                ) : (
                    <div>
                        <SuperButton className={s.defaultPlus} onClick={setLoading}>set loading</SuperButton>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    );
}

export default HW10;
