import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css";



function HW6() {

    const [value, setValue] = useState<string>("");

    const save = () => {

        saveState<string>("span-value",  value);
    };
    const restore = () => {
            setValue(restoreState("span-value",  "enter you text..."));
    };
    console.log(value)
    return (
        <div className={s.column}>
            <h1>homeworks 6</h1>
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "Enter text..."}}
                />
            </div>
            <div>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}

        </div>
    );
}

export default HW6;
