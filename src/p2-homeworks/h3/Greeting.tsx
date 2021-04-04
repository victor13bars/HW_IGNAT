import React, {ChangeEvent} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input; // need to fix with (?:)

    return (
        <div className={s.start}>
            <span className={s.spanError}>{error}</span>
            <div className={s.someClass}>
                <span className={s.spanCount}>{totalUsers}</span>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}/>

                <SuperButton onClick={addUser}>add</SuperButton>
            </div>

        </div>
    );
}

export default Greeting;
