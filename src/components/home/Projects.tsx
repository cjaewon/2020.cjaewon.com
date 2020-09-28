import React from 'react';
import { css } from '@emotion/core';

const Projects: React.FC<{}> = () => {
  const code = '> node cjaewon-projects.js';

  //   급식봇          gomokuio                  letterbot

  //   cjaewon.com   letterbot-webhookletter   more...

  // `;

  return (
    <section css={styles}>
      <div className="projects__highlight">
        <pre>
        <code className="language-bash" data-lang="bash">
          {code}

          <div className="projects__list">
            <div><a href="/projects/mealbot">급식봇</a></div>
            <div><a href="/projects/gomokuio">gomokuio</a></div>
            <div><a href="/projects/letterbot">letterbot</a></div>
            <div><a href="/projects/cjaewon.com">cjaewon.com</a></div>
            <div><a href="/projects/letterbot-webhookletter">letterbot-webhookletter</a></div>
            <div><a href="https://github.com/cjaewon">more...</a></div>
          </div>

        </code>
        </pre>
      </div>
    </section>
  );
};

const styles = css`
  height: 100vh;

  max-width: 760px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .projects__highlight {
    width: 100%;
    color: #f8f8f2;
    background-color: #272822;
    border-radius: 4px;
    padding: 1.25rem 1.925rem;

    code {
      font-family: 'Fira Code', monospace;
    }
  }

  .projects__list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr); 
    margin-top: 0.75rem;
  }

  a {
    color: white;

    &:hover {
      color: #00CED1;
      font-style: italic;
    }
  }
`;

export default Projects;