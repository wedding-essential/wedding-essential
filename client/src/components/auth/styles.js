import styled from "styled-components";
import { gold, grey } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width:100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;

  h1 {
    font-size: 19px;
    font-weight: bold;
    font-size: 19px;
    line-height: 28px;
    color: ${gold};
    margin-bottom: 10px;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  img {
    margin-bottom: 40px;
    width: 250px;
  }

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  .buttons {
    display: flex;
    margin-top: 20px;
  }

  input {
    background-color: ${grey};
    border: 1px solid ${gold};
    border-radius: 3px;
    padding: 10px 10px;
  }

  label {
    margin-top: 10px;
  }

  button {
    background: ${gold};
    border: 1px solid ${gold};
    border-radius: 27px;
    padding: 10px 5px;
    margin: 10px 5px;
    width: 125px;
    color: white;
  }
`;
