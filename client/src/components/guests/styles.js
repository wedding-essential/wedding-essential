import styled from "styled-components";
import { gold } from "../../styles/colors";
import { Container } from "./styles";
import Navbar from "../navbar/Navbar";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: auto;
  height: 100vh;

  main {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;

    .topbar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 768px;
      height: 59px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: ${gold};
    }
`;
