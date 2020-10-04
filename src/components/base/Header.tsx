import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import FullLogo from '../../static/svg/full-logo.svg';

const Header: React.FC<{}> = () => {
  return (
    <div css={styles}>
      <header>
        <FullLogo />
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="#projects">프로젝트</Link></li>
          <li><Link to="/">타임라인</Link></li>
          <li><Link to="/">블로그</Link></li>
        </ul>
      </header>
    </div>
  );
};

const styles = css`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  header {
    padding: 0 1rem;
    width: 1440px;
    display: flex;
    align-items: center;
  }

  ul {
    margin: 0;
  }

  li {
    display: inline-block;
    margin: 0 1rem;
    padding: 0 0.5rem;
  }

  a {
    font-size: 1.25rem;
    color: white;
    text-decoration: none;

  }
`;

export default Header;