import React from 'react';
import { css, Global } from '@emotion/core';

const styles = css`
  html, body {
    margin: 0;
    background-color: #111;
  }
`;

export default () => (
  <Global styles={styles}></Global>
)