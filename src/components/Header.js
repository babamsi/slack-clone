import React from 'react';
import styled from 'styled-components';
import {Avatar} from "@material-ui/core"
import  {AccessTime} from '@material-ui/icons'
import  {Search} from '@material-ui/icons'
import  {HelpOutline} from '@material-ui/icons'
import {useAuthState} from 'react-firebase-hooks/auth'
import { aut } from '../firebase';

function Header() {
  const [user] = useAuthState(aut)
  return <HeaderContainer>
      {/* header left */}
      <HeaderLeft>
        <HeaderAvatar 
        src={user?.photoURL}
        alt={user?.displayName}
        onClick={() => aut.signOut()}
        />
        <AccessTime />
      </HeaderLeft>
      {/* header search bar */}
      <HeaderSearch>
        <Search />
        <input placeholder='Search BABAMSI' />
      </HeaderSearch>
      {/* header right */}
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>

  </HeaderContainer>;
}

export default Header;

const HeaderSearch = styled.div `
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: grey;
  border: 1px solid grey;

  > input {
    background-color: transparent;
    border: none;
    outline: 0;
    min-width: 30vw;
    outline: 0;
    color:white;
  }
`

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px o;
    background-color: var(--slack-color);
    color:white;
    position: fixed;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  >.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`; 
const HeaderAvatar = styled(Avatar) `
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const HeaderRight = styled.div `
  flex: 0.4;
  display: flex;
  align-items: flex-end;
  
  >.MuiSvgIcon-root { 
    margin-left: auto;
    margin-right: 20px;
  }
`;