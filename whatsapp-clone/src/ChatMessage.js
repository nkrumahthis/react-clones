import React from 'react'
import "./ChatMessage.css"

function ChatMessage() {
    return (
        <div className="chat__wrapper">
            <div className="chat__bubble">
                <div class="chat__txt">
                    <p className="chat__name">Nkrumah Sarpong</p>
                    <p className="chat__message">Hey Guys</p>
                    <span className="chat__timestamp">10:20 pm</span>
                </div>
            </div>
            <div className="chat__arrow"></div>
        </div>
    )
}

export default ChatMessage
