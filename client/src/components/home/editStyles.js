import styled from "styled-components";
import { gold, grey } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;

  main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
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
      display: flex;
      flex-flow: column nowrap;
      margin: 70px 0;
    }

    h1 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: ${gold};
    }

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: ${gold};
    }

    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: black;
    }

    img {
      width: 100%;
      max-width: 768px;
    }

    .image-wrapper {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    button {
      background: ${gold};
      border: 1px solid ${gold};
      border-radius: 27px;
      padding: 8px 4px;
      margin: 5px 0 15px 0;
      width: 100px;
      color: white;
    }

    .form {
      display: flex;
      flex-flow: column nowrap;
    }

    input {
      background-color: ${grey};
      border: 1px solid ${gold};
      border-radius: 3px;
      padding: 10px 5px;
    }

    label {
      margin-top: 10px;
    }
  }
`;
