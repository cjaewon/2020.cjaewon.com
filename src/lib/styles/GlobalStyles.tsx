import React from 'react';
import { css, Global } from '@emotion/core';

const styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  html, body {
    scroll-behavior: smooth;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #111;
    color: white;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
  
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default () => (
  <Global styles={styles}></Global>
)