import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
        height: 100%;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      main {
        width: 100vw;
        height: 100vh;
        color: white;
        margin: 0;
        background: linear-gradient(
          to left,
          rgba(25, 32, 255, 0.5),
          rgba(239, 81, 56, 0.5)
        );
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-wrap: break-word;
        flex-wrap: wrap;
      }
    `}
  />
);
