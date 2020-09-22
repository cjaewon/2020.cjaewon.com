import React, { useEffect } from 'react';
import { css } from '@emotion/core';


import CjaewonLogo from '../../static/svg/cjaewon-logo.svg';

const Hero: React.FC<{}> = () => {
  return (
    <section css={styles}>
      <div className="hero__center">
        <CjaewonLogo />
        <h2>The FullStack Dev.</h2>
      </div>
    </section>
  );
};

const styles = css`
  width: 100vw;
  height: calc(100vh - 64px);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
  }

  .hero__center {
    text-align: center;

    h2 {
      margin-top: 0.1rem;
      margin-bottom: 5rem;
    }
  }
`;

export default Hero;