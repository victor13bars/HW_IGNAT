import React, {ChangeEvent} from "react";
import Slider from "@material-ui/core/Slider";
import {makeStyles, Typography} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: any, value: number | number[]) => void
    value: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const useStyles = makeStyles({
        root: {
            width: 300
        },
    });

    const classes = useStyles();
    // const onChangeCallback = (e: any) => {
    //     // сохраняем старую функциональность
    //     console.log(e)
    // }
    // сделать самому, можно подключать библиотеки
    return (
            <div className={classes.root}>
            <Slider
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                color='primary'
            />
            </div>
    );
}

export default SuperDoubleRange;
