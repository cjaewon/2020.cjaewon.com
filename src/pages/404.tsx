import React from 'react';
import { css } from '@emotion/core';


function NotFoundPage() {
  const code = `
    ▄████▄   ▄▄▄██▀▀▀▄▄▄      ▓█████  █     █░ ▒█████   ███▄    █ 
    ▒██▀ ▀█     ▒██  ▒████▄    ▓█   ▀ ▓█░ █ ░█░▒██▒  ██▒ ██ ▀█   █ 
    ▒▓█    ▄    ░██  ▒██  ▀█▄  ▒███   ▒█░ █ ░█ ▒██░  ██▒▓██  ▀█ ██▒
    ▒▓▓▄ ▄██▒▓██▄██▓ ░██▄▄▄▄██ ▒▓█  ▄ ░█░ █ ░█ ▒██   ██░▓██▒  ▐▌██▒
    ▒ ▓███▀ ░ ▓███▒   ▓█   ▓██▒░▒████▒░░██▒██▓ ░ ████▓▒░▒██░   ▓██░
    ░ ░▒ ▒  ░ ▒▓▒▒░   ▒▒   ▓▒█░░░ ▒░ ░░ ▓░▒ ▒  ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
      ░  ▒    ▒ ░▒░    ▒   ▒▒ ░ ░ ░  ░  ▒ ░ ░    ░ ▒ ▒░ ░ ░░   ░ ▒░
    ░         ░ ░ ░    ░   ▒      ░     ░   ░  ░ ░ ░ ▒     ░   ░ ░ 
    ░ ░       ░   ░        ░  ░   ░  ░    ░        ░ ░           ░ 
    ░                                                              
  `;
  return (
    <div css={styles}>
      <div className="projects__highlight">
        <pre>
          <code className="language-bash" data-lang="bash">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

const styles = css`
  height: calc(100vh - 64px);
  max-width: 760px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
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

    pre {
      margin-bottom: 0;
    }
  }
`;


export default NotFoundPage;