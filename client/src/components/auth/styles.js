import styled from "styled-components";
import { gold, grey } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: 4% 2%;

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
    margin: 40px 0;
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
    padding: 5px 5px;
    margin: 10px 5px;
    width: 125px;
    font-size: 13px;
    color: white;
  }
`;
