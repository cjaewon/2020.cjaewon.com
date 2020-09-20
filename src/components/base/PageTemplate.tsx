import React from 'react';

import GlobalStyles from '../../lib/styles/GlobalStyles';
import Header from './Header';

const PageTemplate: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Header />
      <GlobalStyles />
      {children}
    </div>
  );
};

export default PageTemplate;