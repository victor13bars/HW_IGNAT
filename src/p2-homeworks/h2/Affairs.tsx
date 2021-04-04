import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }; // need to fix
    const setHigh = () => {
        props.setFilter("high")
    };
    const setMiddle = () => {
        props.setFilter("middle")
    };
    ;
    const setLow = () => {
        props.setFilter("low")
    };
    ;

    return (
        <div className={s.someClass}>

            {mappedAffairs}
            <SuperButton className={s.defaultPlus} onClick={setAll}> All</SuperButton>
            <SuperButton className={s.defaultPlus} onClick={setHigh}>High</SuperButton>
            <SuperButton className={s.defaultPlus} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={s.defaultPlus}  onClick={setLow}>Low</SuperButton>
        </div>
    );
}

export default Affairs;
