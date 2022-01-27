import React from 'react';
import styled from 'styled-components';
import {FiberManualRecord} from "@material-ui/icons"
import {Create} from "@material-ui/icons"
import {InsertComment, 
    Inbox, 
    Drafts, 
    BookmarkBorder, 
    PeopleAlt, 
    Apps, 
    FileCopy, 
    ExpandLess, 
    ExpandMore, 
    Add} from "@material-ui/icons"
import SidebarOption from './SidebarOption';
import {useCollection} from 'react-firebase-hooks/firestore'
import { aut, db } from '../firebase';
import { collection } from "firebase/firestore"; 
import {useAuthState} from 'react-firebase-hooks/auth'




function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, "rooms"))
  const [user] = useAuthState(aut)
  return <SidebarContainer>

    <SidebarHeader>
        <SidebarInfo>
            <h2>BABAMSI FUN CHAT</h2>
            <h3>
                <FiberManualRecord />
                {user.displayName}
            </h3>
        </SidebarInfo>
        <Create />
    </SidebarHeader>
    <SidebarOption Icon={InsertComment} title={"Threads"}/>
    <SidebarOption Icon={Inbox} title={"Mention & Reactions"}/>
    <SidebarOption Icon={Drafts} title={"Saved Items"}/>
    <SidebarOption Icon={BookmarkBorder} title={"Channel Browser"}/>
    <SidebarOption Icon={PeopleAlt} title={"People & user groups"}/>
    <SidebarOption Icon={Apps} title={"Apps"}/>
    <SidebarOption Icon={FileCopy} title={"File Browser"}/>
    <SidebarOption Icon={ExpandLess} title={"Show less"}/>
    <hr/>
    <SidebarOption Icon={ExpandMore} title={"Channels"} />
    <hr />
    <SidebarOption Icon={Add} addChannelOption title={"Add Channel"} />
    {channels?.docs.map(doc => (
        <SidebarOption 
        key={doc.id} 
        id={doc.id} 
        title={doc.data().name}/>
    ))}

  </SidebarContainer>;

}

export default Sidebar;
const SidebarContainer = styled.div`
background-color: var(--slack-color);
color: white;
flex: 0.3;
max-width: 260px;
border-top: 5px solid #49274b;
margin-top: 40px;

>hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b
}
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color:white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    >h3 > .MuiSvgIcon-root {
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2;
            color: green;
        }
`