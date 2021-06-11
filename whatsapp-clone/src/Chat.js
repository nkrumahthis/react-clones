import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css"
import db from "./firebase";

import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
import ChatMessage from "./ChatMessage";

function Chat(){

    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [ roomName, setRoomName ] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot =>{
                setRoomName(snapshot.data().name)
            })

            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot=> setMessages(snapshot.docs.map(doc=>doc.data())))
        }
    }, [roomId])
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(`you typed ${input}`)
        setInput("")
    }

    return <div className="chat">
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
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
            {
                messages.map(message=>(
                    <ChatMessage 
                        key={message}
                        name={message.name} 
                        message={message.message} 
                        timestamp={new Date(message.timestamp?.toDate()).toUTCString()}
                    />  
                ))
            }
            
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