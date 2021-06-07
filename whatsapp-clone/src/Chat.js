import React, { useState, useEffect } from "react";
import "./Chat.css"

import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
import ChatMessage from "./ChatMessage";

function Chat(){

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`you typed ${input}`)
    }

    return <div className="chat">
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>     
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
            <ChatMessage/>  
        </div>
        <div className="chat__footer">
            <IconButton>
                <InsertEmoticon/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <form>
                <input 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    type="text" 
                    placeholder="Type a Message" 
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <IconButton>
                <Mic/>
            </IconButton>
        </div>
    </div>
}

export default Chat;