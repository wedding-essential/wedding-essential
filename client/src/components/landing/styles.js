import styled from "styled-components";
import { gold } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width:100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;

  img {
    margin-bottom: 40px;
    width: 250px;
  }

  button {
    background: ${gold};
    border: 1px solid ${gold};
    border-radius: 27px;
    padding: 20px 10px;
    margin: 10px 0;
    width: 214px;
    font-size: 13px;
  }
`;
