import styled from "styled-components";

export const SidebarContainer=styled.div`
  position: sticky;
  top: 65px;
  padding: 25px 10px;
  flex: 0.33;
  @media screen and (max-width: 1264px) {
    flex: 0;
    display: none;
  }
  
  
`
export const SidebarRowContainer=styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: white;
  max-width: 280px;
  &:hover{
    background-color: #53585b;
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