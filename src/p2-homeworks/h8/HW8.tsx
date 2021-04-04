import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./HW8.module.css";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span className={s.span}>{p.name} - {p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))

    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))

    const CheckAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))
    return (
        <div className={s.column}>
            <hr/>
            <h1>homeworks 8</h1>

            {/*should work (должно работать)*/}
            {finalPeople}
            <div>
                <SuperButton className={s.defaultPlus} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.defaultPlus} onClick={sortDown}>sort down</SuperButton>
                <SuperButton className={s.defaultPlus} onClick={CheckAge}>check 18</SuperButton>
            </div>
            {/*<div>sort down</div>*/}

            {/*check 18*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}

        </div>
    );
}

export default HW8;
