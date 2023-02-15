import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-collapse: collapse;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button{
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
  }

  @font-face {
    font-family: "NotoSansKR";
    src: url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap");
  }

  @font-face {
    font-family: "Roboto";
    src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
  }
`;
