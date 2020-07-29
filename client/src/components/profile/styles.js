import styled from "styled-components";
import { gold, yellow } from "../../styles/colors";

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

    img {
      width: 200px;
      object-fit: cover;
      border-radius: 50%;
      margin-top: 10px;
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
      color: white;
    }

    h3 {
      font-weight: 500;
      font-size: 14px;
      line-height: 36px;
      color: ${gold}
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 36px;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 768px;
      height: 59px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .profile-container {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }

    .username {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${gold};
      width: 100%;
      max-width: 768px;
      height: 40px;
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
  }
`;
