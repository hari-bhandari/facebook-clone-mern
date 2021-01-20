import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 15px 20px;
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
  .input{
    display: flex;
    align-items: center;
    background-color: #3a3b3c;
    padding: 10px;
    margin-left: 10px;
    border-radius: 999px;
    color: #e4e6eb;
  }
  img{
    height: 40px;
  }
  input::placeholder{
    color: #e4e6eb;
  }
  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    color: #e4e6eb;

  }
  .searchIcon{
    color: #e4e6eb;
  }
`