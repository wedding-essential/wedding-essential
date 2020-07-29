import styled from "styled-components";
import { gold, grey } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  height: 100vh;
  align-items: center;
  margin: auto;

  main {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  img {
    width: 92px;
    height: 92px;
    border-radius: 50%;
  }

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: ${gold}
  }

  .topbar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 59px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .userHeader {
    display: flex;
    align-items: center;
  }
`;
