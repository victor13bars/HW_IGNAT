import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC, themeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, themeType>((state) => state.theme.theme)
    console.log(theme)

    const dispatch = useDispatch()


    const onChangeCallback = (theme: themeType) => {
        console.log("callback")
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme] + ' ' + s.column}>
        
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            <div>
                <SuperRadio
                    name={"radio"}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
