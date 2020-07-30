import styled from "styled-components";
import { gold } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  margin: auto;
  max-width: 768px;

  main {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    margin-bottom: 70px;

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
      color: ${gold};
    }

    p {
      font-size: 14px;
      text-align: justify;
    }

    .banner {
      height: 30vh;
      background-image: url(${(props) => props.img});
      background-size: cover;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: flex-end;

      img {
        width: 104px;
        height: 104px;
        object-fit: cover;
        border-radius: 50%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        transform: translateY(50px);
      }

      .date {
        background-color: ${gold};
        padding: 10px 25px;
        color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        transform: translateY(25px);
      }
    }
    .story {
      margin: 70px 40px 10px 40px;
    }

    .timeline,
    .dresscode,
    .contact {
      margin: 10px 40px 10px 40px;

      .event {
        margin-top: 10px;

        h3 {
          text-decoration: underline;
        }
      }
      span {
        color: black;
        font-size: 16px;
      }
    }
    button {
      background: ${gold};
      border: 1px solid ${gold};
      border-radius: 27px;
      padding: 8px 4px;
      margin: 20px 0 15px 0;
      width: 100px;
      color: white;
    }

    .editlink {
      align-self: center;
    }
  }
`;
