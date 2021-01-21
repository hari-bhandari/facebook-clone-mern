import styled from "styled-components";
export const ChatContainer=styled.div`
  position: sticky;
  top: 65px;
  flex: 0.2;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: none;
  flex-shrink: 9999;
  bottom: 0;
  overflow-y: auto;


`
export const ChatRowContainer=styled.div`
  display: flex;
  justify-content: flex-start;
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
export const ChatbarHeader=styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin-left: 10px;
    font-size: 1.008rem;
    text-align: left;
    font-weight: 500;
    color: #BDBDBD;
  }
  .MuiSvgIcon-root {
    color: white;
  }
`