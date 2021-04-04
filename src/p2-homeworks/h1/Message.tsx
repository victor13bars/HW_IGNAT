import React from "react";
import css from "./Message.module.css"
import {MessageDataType} from "./HW1"


function Message(props: MessageDataType) {
    return (
        <div className={css.message}>
            <div className={css.avatar}>
                <img className={css.image} src={props.avatar} alt="avatar"/>
            </div>
            <div className={css.message_content}>
                <div className={css.message_body}>
                    <div className={css.user_name}>{props.name}</div>
                    <div className={css.user_message}>{props.message}</div>
                </div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;

