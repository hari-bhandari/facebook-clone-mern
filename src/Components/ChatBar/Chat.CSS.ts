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
  overflow-y: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1px;
    height: 15px;
    border: 1px solid #000000;
  }

  &:hover {
    overflow-y: scroll;
  }
  @media screen and (max-width: 900px) {
    display: none;
    flex: 0;
  }
  @media screen and (max-width: 1541px) {
    flex: 0.25;
  }
  @media screen and (max-width: 1271px) {
    flex: 0.3;
  }
  @media screen and (max-width: 1063px) {
    flex: 0.38;
  }
  @media screen and (max-width: 952px) {
    flex: 0.42;
  }


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