import React from 'react';

import PageTemplate from '../components/base/PageTemplate';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';

function IndexPage() {
  return (
    <PageTemplate>
      <Hero />
      <Projects />
    </PageTemplate>
  );
}


export default IndexPage;