import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';

const Projects: React.FC<{}> = () => {
  const code = '> node cjaewon-projects.js';
  const data = useStaticQuery<Query>(query);
  const [ctx, setCtx] = useState<{
    title: string;
    data: {
      html: string;
      headings: {
        depth: number;
        value: number;
      }
      frontmatter :{
        title: string;
        uses: string[];
      }
    } | null;
  }>({
    title: '',
    data: null,
  });
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const title = e.currentTarget.innerText;
    const found = data.allMarkdownRemark.edges.find(edge => edge.node.frontmatter.title === title);
  
    setCtx({
      title: found!.node.frontmatter.title,
      data: found!.node,
    });
  };

  return (
    <section css={styles}>
    <div className="projects__highlight">
      <pre>
      <code className="language-bash" data-lang="bash">
        {code}

        <div className="projects__list">
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div key={edge.node.frontmatter.title}>
                { edge.node.frontmatter.title === ctx.title 
                    ?
                  <span onClick={onClick} className="projects__list--clicked">{edge.node.frontmatter.title}</span>
                    :
                  <span onClick={onClick}>{edge.node.frontmatter.title}</span>
                }
              </div>
            );
          })}
          <div><a href="https://github.com/cjaewon">more...</a></div>
          {/* <div><a href="/projects/mealbot">급식봇</a></div>
          <div><a href="/projects/gomokuio">gomokuio</a></div>
          <div><a href="/projects/letterbot">letterbot</a></div>
          <div><a href="/projects/cjaewon.com">cjaewon.com</a></div>
          <div><a href="/projects/letterbot-webhookletter">letterbot-webhookletter</a></div>
           */}
        </div>
       {  ctx.data 
            && 
          // TOD: add link
          <div className="projects__info">
            <div className="projects__info--use">사용된 기술 : [ {ctx.data.frontmatter.uses.map(use => `${use}  `)}]</div>
            <div dangerouslySetInnerHTML={{
                __html: ctx.data.html
              }} 
            />
          </div>
        }


      </code>
      </pre>
    </div>
  </section>
  );
};

const query = graphql`
{
  allMarkdownRemark (sort: { fields: [frontmatter___date], order:  ASC }) {
    edges {
      node {
        html
        headings {
          depth
          value
        }
        frontmatter {
          title
          uses
        }
      }
    }
  }
}
`;

interface Query {
  allMarkdownRemark: {
    edges: {
      node: {
        html: string;
        headings: {
          depth: number;
          value: number;
        }
        frontmatter :{
          title: string;
          uses: string[];
        }
      }
    }[]
  }
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

    span {
      &:hover {
        color: #00CED1;
        font-style: italic;
        cursor: pointer;
      }
    }
  }

  .projects__list--clicked {
    color: #00CED1;
  }

  .projects__info {
    margin-top: 1.125rem;

    p {
      margin: 0.5rem 0;
    }
  }

  .projects__info--use {
    color: #2ed573;
  }

  a {
    color: white;

    &:hover {
      color: #00CED1;
      font-style: italic;
      cursor: pointer;
    }
  }
`;

export default Projects;