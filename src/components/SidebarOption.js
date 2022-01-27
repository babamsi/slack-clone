import React from 'react';
import styled from 'styled-components';
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

function SidebarOption({Icon, title, addChannelOption, id}) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("please enter channel Name")
    if (channelName) {
     addDoc(collection(db, "rooms"), {
       name: channelName
     })
    }
  }
  const selectChannel = () => {
    if(id) {
      dispatch(enterRoom({
        roomId: id
      }))
    }
  }

  return <SiderbarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
    {Icon && <Icon fontSize='small' style={{padding: 10}}/>}
    {Icon ? (
      <h3>{title}</h3>
    ) : (
      <SidebarOPtionChannel>
        <span>#</span>{title}
      </SidebarOPtionChannel>
    )}
  </SiderbarOptionContainer>;
}

export default SidebarOption;

const SiderbarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

 :hover {
   background-color: #340e36;
   opacity: 0.9;
 }
 >h3 {
   font-weight: 500;
 }
 >h3 > span {
   padding: 15px;
 }
`
const SidebarOPtionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`