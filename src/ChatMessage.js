import React from 'react'
import "./ChatMessage.css"

import { useStateValue } from "./StateProvider";


function ChatMessage(props) {
    const [{ user }, dispatch] = useStateValue();

    if(props.name === user.displayName){
        console.log("me: " + props.message)
    } else {
        console.log(props.name + ": " + props.message);
    }


    return (
        <div className="chat__wrapper">
            <div className={`chat__bubble ${(props.name === user.displayName) ? 'chat__me' : 'chat__alt'}`}>
                <div className="chat__txt">
                    <p className="chat__name">{props.name}</p>
                    <p className="chat__message">{props.message}</p>
                    <span className="chat__timestamp">{props.timestamp}</span>
                </div>
            </div>
            <div className="chat__arrow"></div>
        </div>
    )
}

export default ChatMessage
