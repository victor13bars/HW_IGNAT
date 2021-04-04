import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";



export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => {

        const newUser: UserType = {_id: v1(), name: name}
        console.log(newUser)
        setUsers([newUser, ...users]);
        console.log(users)
        console.log(newUser)
    }

    return (
        <div>
            <hr/>
            <h1 >homeworks 3</h1>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    );
}

export default HW3;
