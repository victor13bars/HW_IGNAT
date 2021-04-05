import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from "@material-ui/core";
import s from "./HW10.module.css"

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = useSelector((state: AppStoreType) => state.loading.loading);

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s.column}>
            <h1>homeworks 10</h1>

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
