import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useRef } from 'react';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoom } from '../features/appSlice';
import { db } from '../firebase';
import ChatInput from './ChatInput';
import Message from './Message';

function Chat() {
    const chatref = useRef(null)
    const roomId = useSelector(selectRoom);
    const [roomDetails] = useDocument(
        roomId && doc(db, "rooms", roomId)
    )
    const roomMessages = useCollection(roomId && query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc")))


    useEffect(() => {
        chatref?.current?.scrollIntoView({ block: "start", behavior: "smooth" })
    })
  return (
  <ChatContainer>
      {roomDetails && roomMessages && (
           <>
           <Header>
           <HeaderLeft>
           <h4>
               <strong>#{roomDetails?._document.data.value.mapValue.fields.name.stringValue}</strong>
           </h4>
           <StarBorderOutlined/>
         </HeaderLeft>
         <HeaderRight>
           <p>
               <InfoOutlined/> Details
           </p>
   
         </HeaderRight>
         </Header>
         <ChatMessages>
             {roomMessages?.[0]?.docs.map(doc => {
                 const {message, user, timestamp, userImage} = doc._document.data.value.mapValue.fields;
                 console.log(doc)
                 return (
                   <Message 
                   message={message.stringValue}
                   id={doc.id}
                   user={user.stringValue}
                   timestamp={timestamp.timestampValue}
                   userImage={userImage.stringValue}/>
                   )
             })}
             <ChatBottom ref={chatref}/>
         </ChatMessages>
       <ChatInput
           channelName={roomDetails?._document.data.value.mapValue.fields.name.stringValue}
           channelId={roomId}
       />
       </>
      )}
     
  </ChatContainer>
)}

export default Chat;

const ChatBottom = styled.div`
    padding-bottom: 200px;
`


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    
`

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 50px;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    >h4 {
        margin-right: 10px;
        text-transform: lowercase;
    }
`
const HeaderRight = styled.div`
 >p {
     display: flex;
     align-items: center;
     font-size: 14px;
 }
  >p >.MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
  }
`

const ChatMessages = styled.div``
