import styled from "styled-components";

export const SidebarContainer=styled.div`
  padding: 25px 10px;
  flex: 0.33;
`
export const SidebarRow=styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
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
`