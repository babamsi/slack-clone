import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { SignInWithGoogle } from '../firebase';

function Login() {
    const Signin = (e) => {
        e.preventDefault()
        SignInWithGoogle();
    }
  return <LoginContainer>
      <LoginInnerContainer>
          <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' alt='slack' />
          <h1>Sign in to the Babamsi</h1>
          <p>Babamsi.slack.com</p>
          <Button type='submit' onClick={Signin}>Sign in with Google</Button>
      </LoginInnerContainer>
  </LoginContainer>;
}

export default Login;
const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button{
        margin-top: 50px;
        text-transform: inherit !important;
        color: white;
        background-color: #0a8d48;
    }
`