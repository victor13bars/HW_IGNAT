import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import css from "./Message.module.css"

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const messageData: Array<MessageDataType> = [
    {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Victor",
        message: "Hello, how are you?",
        time: "22:00",
    },
    {
        avatar: "https://sun9-36.userapi.com/impf/c836231/v836231313/151fe/4VuEdvsXbYE.jpg?size=400x0&quality=90&sign=86bbcb86fd20c94d4f5099b05bbf713d&ava=1",
        name: "Ignat",
        message: "Hi, perfectly!!!!!!",
        time: "22:05",
    },
    {
        avatar: "",
        name: "",
        message: "What are you doing?",
        time: "22:10",
    },
    {
        avatar: "",
        name: "",
        message: "Checking your homework.",
        time: "22:15",
    },

];

function HW1() {
    return (
        <div>
            <hr/>
            <h1 className={css.homework}>homeworks 1</h1>

            <Message avatar={messageData[0].avatar}
                     message={messageData[0].message}
                     name={messageData[0].name}
                     time={messageData[0].time} />

            <AlternativeMessage avatar={messageData[1].avatar}
                     message={messageData[1].message}
                     name={messageData[1].name}
                     time={messageData[1].time}/>

            <Message avatar={messageData[0].avatar}
                     message={messageData[2].message}
                     name={messageData[0].name}
                     time={messageData[2].time}/>

            <AlternativeMessage avatar={messageData[1].avatar}
                                message={messageData[3].message}
                                name={messageData[1].name}
                                time={messageData[3].time}/>

        </div>
    );
}
export default HW1;

