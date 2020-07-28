import { createGlobalStyle } from "styled-components";
import { gold } from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    font-family: "Poppins";
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: gold;
  }
`;

export default GlobalStyle;
