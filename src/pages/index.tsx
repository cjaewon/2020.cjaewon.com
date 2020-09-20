import { css } from '@emotion/core';
import React from 'react';
import PageTemplate from '../components/base/PageTemplate';
import Hero from '../components/home/Hero';

function IndexPage() {
  return (
    <PageTemplate>
      <Hero />
    </PageTemplate>
  );
}

export default IndexPage;