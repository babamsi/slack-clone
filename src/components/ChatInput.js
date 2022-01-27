import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { aut, db } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'


function ChatInput({channelName, channelId}) {
    const [user] = useAuthState(aut);
    const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        if(!channelId) {
            return false
        }
        // const messageRef = doc(db, "rooms", channelId, "messages");
        addDoc(collection(db, "rooms", channelId, "messages"), {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })
        setInput("")


    }
  return <ChatInputContainer>
        <form>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter message ${channelName}`} />
            <Button type='submit' hidden onClick={sendMessage}>
                SEND
            </Button>
        </form>
  </ChatInputContainer>;
}

export default ChatInput;

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    >form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border-radius: 3px;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }
    >form > button {
        display: none !important;
    }
`
