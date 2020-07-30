import styled from "styled-components";
import { lightgrey } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 768px;
  justify-content: space-evenly;
  align-items: center;
  border-top: 2px solid ${lightgrey};

  img {
    height: 35x;
    width: auto;
    margin: 10px 20px;
  }
`;
