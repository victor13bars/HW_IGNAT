import React from "react";
import Message from "./Message";
import css from "./Message.module.css";
import {MessageDataType} from "./HW1";

function AlternativeMessage(props: MessageDataType) {
    return (
        <div className={css.alt_mess}>
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

export default AlternativeMessage;
