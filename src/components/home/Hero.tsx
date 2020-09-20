import React from 'react';
import { css } from '@emotion/core';

const Hero: React.FC<{}> = () => {
  return (
    <div css={styles}>
      <h1>안녕하세요, 저는 풀스택 개발자입니다!</h1>
    </div>
  );
};

const styles = css`
  text-align: center;

  p {
    font-size: 2rem;
  }
`;

export default Hero;