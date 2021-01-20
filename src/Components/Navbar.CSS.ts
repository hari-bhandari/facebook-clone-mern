import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 54px;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #242526;
  z-index: 100;
  top: 0;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
`
export const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .input {
    display: flex;
    align-items: center;
    background-color: #3a3b3c;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;
    color: #e4e6eb;
  }

  img {
    height: 38px;
  }

  input::placeholder {
    color: #e4e6eb;
  }

  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    color: #e4e6eb;

  }

  .searchIcon {
    color: #e4e6eb;
  }
`
export const NavbarCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  .header__option {
    display: flex;
    align-items: center;
    padding: 0 30px;
    cursor: pointer;
  }

  .header__option:hover {
    background-color: #53585b;
    border-radius: 10px;
    align-items: center;
    padding: 0 30px;
    border-bottom: 0;
  }

  .MuiSvgIcon-root {
    color: #b0b3b8;
  }


`