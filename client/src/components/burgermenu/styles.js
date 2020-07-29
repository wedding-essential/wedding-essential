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
  }

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
    max-width: 700px;
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

  p {
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
  }

  .menulinks {
    display: flex;
    flex-flow: column nowrap;
  }

  .linkitems {
    display: flex;
    justify-content: center;
    align-items: center;
  }


`;
