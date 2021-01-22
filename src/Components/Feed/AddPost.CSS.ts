import styled from "styled-components";
export const AddPostContainer=styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: #242526;
  border-radius: 15px;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 100%;
`
export const PostContainerTop=styled.div`
  display: flex;
  border-bottom: 1px solid #eff2f5;
  padding: 15px;
  form{
    flex: 1;
    display: flex;
  }
  form >input{
    outline-width: 0;
    border: none;
    padding: 5px 20px;
    margin: 0 10px;
    border-radius: 999px;
    background-color: #3A3B3C;
  }
  form>button{
    display: none;
  }
  .messageSender__input {
    flex: 1;
  }
`
export const PostContainerBottom=styled.div`
  display: flex;
  justify-content: space-evenly;
  .messageSender__option {
    padding: 20px;
    display: flex;
    align-items: center;
    color: gray;
    margin: 5px;
  }

  .messageSender__option > h3 {
    font-size: medium;
    margin-left: 10px;
    cursor: pointer;
  }
  .messageSender__option:hover {
    background-color: #45474a;
    border-radius: 20px;
  }
`