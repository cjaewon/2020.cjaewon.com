import { css } from '@emotion/core';
import React from 'react';
import PageTemplate from '../components/base/PageTemplate';

import HeroImg from '../static/img/hero.svg';

function IndexPage() {
  return (
    <PageTemplate>
      <img src={HeroImg} css={css`
        display: flex;
        margin: 8rem auto;
      `} />
    </PageTemplate>
  );
}

export default IndexPage;