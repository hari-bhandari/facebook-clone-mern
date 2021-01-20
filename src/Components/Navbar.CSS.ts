import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 56px;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: #242526;
  z-index: 100;
  top: 0;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
`
export const InputContainer=styled.div`
  display: flex;
  align-items: center;
  background-color: #3a3b3c;
  padding: 10px;
  margin-left: 10px;
  border-radius: 999px;
  color: #e4e6eb;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  font: 400 13.3333px Arial;
  width: 239px;
  input::placeholder {
    color: #e4e6eb;
  }
  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    color: #e4e6eb;

  }
  @media screen and (max-width: 1264px) {
    width: 22px;
    input::placeholder{
      opacity: 0;
    }
  }
`
export const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #385898;
  
  .p361ku9c{
    background-color: white;
  }

  img {
    height: 40px;
    padding: 0;
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
  @media screen and (max-width: 854px) {
    .header__option {
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
    }
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
    height: 28px;
    width: 28px;
  }


`
export const NavbarRight = styled.div`
  color: white;
  display: flex;
  .header__info {
    display: flex;
    align-items: center;
  }
  .header__info >h4{
    color: #b0b3b8;
    margin-left: 10px;
  }
  .MuiSvgIcon-root {
    color: #b0b3b8;
  }
`