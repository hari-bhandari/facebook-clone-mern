import styled from "styled-components";
export const ChatContainer=styled.div`
  flex: 0.33;
  border: none;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;


`
export const ChatRowContainer=styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: white;
  max-width: 280px;

  &:hover {
    background-color: #45474a;
    border-radius: 10px;
  }

  span {
    margin-left: 10px;
    font-size: .9375rem;
    text-align: left;
    font-weight: 500;
  }

  .MuiSvgIcon-root {

    font-size: xx-large;
    color: #2e81f4;
  }

  .MuiAvatar-root {
    width: 36px !important;
    height: 36px !important;
  }
`