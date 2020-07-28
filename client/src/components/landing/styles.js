import styled from "styled-components";
import { gold } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 80vh;
  align-items: center;
  justify-content: center;
  margin: 4% 2%;

  img {
    margin-bottom: 40px;
  }

  button {
    background: gold;
    border: 1px solid gold;
    border-radius: 27px;
    padding: 20px 10px;
    margin: 10px 0;
    width: 214px;
    font-size: 13px;
  }
`;
