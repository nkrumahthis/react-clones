import React from 'react'
import "./ChatMessage.css"

function ChatMessage(props) {
    return (
        <div className="chat__wrapper">
            <div className={`chat__bubble ${true && 'chat__me'}`}>
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
