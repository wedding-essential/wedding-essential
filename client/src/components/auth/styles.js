import styled from "styled-components";
import { gold } from "../../styles/colors";

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
    color: gold;
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
  }

  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  button {
    background: gold;
    border: 1px solid gold;
    border-radius: 27px;
    padding: 10px 10px;
    margin: 10px 0;
    width: 125px;
    font-size: 13px;
    color: white;
  }
`;
