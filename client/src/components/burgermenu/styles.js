import styled from "styled-components";
import { gold, yellow, lightgrey } from "../../styles/colors";

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
      width: 92px;
      height: 92px;
      border-radius: 50%;
      margin-right: 20px;
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
    }

    p {
      font-weight: 500;
      font-size: 36px;
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

    .userHeader {
      width: 100%;
      max-width: 768px;
      background-color: ${yellow};
      height: 20vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .passcode {
      width: 80%;
      max-width: 500px;
      background-color: ${gold};
      height: 20%;
      mix-blend-mode: normal;
      opacity: 0.85;
      border-radius: 33px;
      margin: 20px 0;
      color: white;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    .menulinks {
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      max-width: 700px;
      margin-top: 20px;
    }

    .linkitems {
      display: flex;
      justify-content: baseline;
      align-items: center;
      padding: 20px 20px;
      border-top: 2px solid ${lightgrey};
      border-bottom: 2px solid ${lightgrey};

      img {
        height: 31px;
      }
    }

    .linkitems:nth-child(1) {
      border-bottom: none;
    }
  }
`;
