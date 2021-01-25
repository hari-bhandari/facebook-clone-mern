import React from 'react';
import styled from "styled-components";
const LoginContainer=styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  button {
    width: 300px;
    background-color: #2e81f4;

    color: #eff2f5;
    font-weight: 800;
  }
  button:hover {
    background-color: #fff;
    color: #2e81f4;
  }
  div > img {
    object-fit: contain;
    height: 150px;
  }
  div {
    display: flex;
    flex-direction: column;
  }


`
const Login = () => {

    return (
        <LoginContainer>
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <button type="submit" >
                Sign In
            </button>
        </LoginContainer>
    );
};

export default Login;