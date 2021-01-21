import styled from "styled-components";
export const ChatContainer=styled.div`
  flex: 0.33;
  border: none;
  overflow: hidden 
`
export const ChatRowContainer=styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: white;
  max-width: 280px;
  &:hover{
    background-color: lightgray;
    border-radius: 10px;
  }
  h4 {
    margin-left: 20px;
    font-weight: 600;
  }
  .MuiSvgIcon-root {
    
    font-size: xx-large;
    color: #2e81f4;
  }
  .MuiAvatar-root{
    width: 36px!important;
    height: 36px!important;
  }
`