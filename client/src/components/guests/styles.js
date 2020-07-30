import styled from "styled-components";
import { gold } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: auto;
  height: 100%;

  main {
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    .topbar-wrapper {
      position: fixed;
      top: 0;
      width: 100%;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      height: 59px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: white;
    }

    .content {
      margin: 70px 0;
      z-index: -1;
    }

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: ${gold};
    }
`;
