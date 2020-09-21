import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import anime from 'animejs';

import CjaewonLogo from '../../static/svg/cjaewon-logo.svg';

const Hero: React.FC<{}> = () => {
  useEffect(() => {
    anime({
      targets: '.hero-svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div css={styles}>
      <div className="">
        <CjaewonLogo />
      </div>
    </div>
  );
};

const styles = css`
  text-align: center;

  p {
    font-size: 2rem;
  }

  .hero-svg {
    margin-top: 14rem;

    path {
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
    }
  }


`;

export default Hero;