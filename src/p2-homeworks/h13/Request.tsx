import React, {ChangeEvent} from "react";
import s from "../h12/HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {authAC, getUsersThunkCreator} from "./authReducer";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {CircularProgress} from "@material-ui/core";

function Request() {
    const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading);
    const success = useSelector<AppStoreType, boolean>((state) => state.auth.success)
    const error = useSelector<AppStoreType, string>((state) => state.auth.error)
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(getUsersThunkCreator(success))
    }
    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(authAC(e.currentTarget.checked))
    }
    return (
        <div className={s.column}>
            {loading
                ? (
                    <CircularProgress color="secondary"/>
                ) : (<div className={s.column}>
                    <h1>homeworks 13</h1>

                    <SuperCheckbox checked={success} onChange={onChangeCallBack}>
                        check {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>
                    <SuperButton className={s.defaultPlus} onClick={onClick}>
                        push
                    </SuperButton>
                    <span>  {error}</span>
                </div>)
            }
        </div>
    );
}

export default Request;
