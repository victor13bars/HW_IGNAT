import React from 'react'
import Clock from './Clock'
import s from "./HW9.module.css";

function HW9() {
    return (
        <div className={s.column}>
            <h1>homeworks 9</h1>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </div>
    )
}

export default HW9
