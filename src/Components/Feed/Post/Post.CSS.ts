import styled from "styled-components";

export const PostContainer=styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 5px 7px -7px rgba(0, 0, 0, 0.75);
`
export const PostTop=styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
  h3 {
    font-size: medium;
  }
  .post__topInfo > h3 {
    font-size: medium;
  }

`

export const PostBottom=styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`
export const Options=styled.div`
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: gray;
  cursor: pointer;
  padding: 15px;
  .post__option {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex: 1;
  }

  .post__option > p {
    margin-left: 10px;
  }

  .post__option:hover {
    background-color: #eff2f5;
    border-radius: 10px;
  }

`
