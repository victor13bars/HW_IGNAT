import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(10);
    const [value2, setValue2] = useState<number[]>([value1, 100]);

    const changeRange = (value: number) => {
        setValue1(value)
        setValue2([value, value2[1]])
    }

    const changeRangeDouble = (event: any, newValue: number | number[]) => {

        setValue2(newValue as number[])
        setValue1(value2[0])
        console.log(newValue)
        console.log(event)
    }
    // const handleChange = (event: any, newValue: number | number[]) => {
    //     setValue(newValue as number[]);
    // };

    return (
        <div className={s.column}>
            <h1>homeworks 11</h1>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={changeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={value2} onChangeRange={changeRangeDouble}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </div>
    );
}

export default HW11;
