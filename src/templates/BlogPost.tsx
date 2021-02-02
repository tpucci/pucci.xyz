import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Page } from "../components/Page"
import SEO from "../components/Seo"
import styled, { css } from "styled-components"
import { MiniBioTitle, MiniBioParagraph } from "../atoms/Text"
import { formatPostDate, formatReadingTime } from "../helpers/formatters"
import { codeToLanguage, createLanguageLink } from "../helpers/i18n"
import { Translations } from "../atoms/Translations"
import { BioImage } from "../atoms/BioImage"

const GITHUB_USERNAME = "tpucci"
const GITHUB_REPO_NAME = "thomaspucci.com"

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(slug: { eq: $slug }) {
      id
      timeToRead
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
    }
  }
`

const PostPage = (props: any) => {
  const post = props.data.mdx
  let {
    previous,
    next,
    slug,
  } = props.pageContext

  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${slug.slice(
    1,
    slug.length - 1
  )}/index.md`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://thomaspucci.com${slug}`
  )}`
  return (
    <Page>
      <SEO title={post.frontmatter.title} />
      <main>
        <article>
          <header>
            <UnderlinedTitle>
              {post.frontmatter.title}
            </UnderlinedTitle>
            <p>{post.frontmatter.spoiler}</p>
            <p>
              Last updated: {formatPostDate(post.frontmatter.date, undefined)}
              {` - ${formatReadingTime(post.timeToRead)}`}
            </p>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <footer>
            <p>
              <a href={discussUrl} target="_blank" rel="noopener noreferrer">
                Discuss on Twitter
              </a>
              {` - `}
              <a href={editUrl} target="_blank" rel="noopener noreferrer">
                Edit on GitHub
              </a>
            </p>
          </footer>
        </article>
      </main>
      <aside>
        <hr></hr>
        <Bio>
          <MiniBioImageContainer>
            <BioImage style={{borderRadius: "50%"}} />
          </MiniBioImageContainer>
          <BioDescription>
            <MiniBioTitle>
              Hi, I'm <span>Thomas</span>
            </MiniBioTitle>
            <MiniBioParagraph>
              👋 You are in my digital garden 🌳.
            </MiniBioParagraph>
          </BioDescription>
        </Bio>
        <hr></hr>
        <nav>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </Page>
  )
}

const Bio = styled.div`
  flex-direction: row;
`

const MiniBioImageContainer = styled.div`
  flex: 1;
  display: block;
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.grid * 2}px;
`

const BioDescription = styled.div`
  padding-left: ${({ theme }) => theme.grid * 2}px;
  flex: 3;
  justify-content: center;
`

const UnderlinedTitle = styled.h1`
  align-self: flex-start;
  color: ${({ theme }) => theme.color.primary};
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    display: block;
    height: ${({ theme }) => theme.grid * 2}px;
    background-color: ${({ theme }) =>
      theme.darkModeLoading
        ? "transparent"
        : theme.darkMode
        ? theme.color.black
        : theme.color.white};
    transition: background-color 0.25s ease-in-out;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 15px;
    z-index: -1;
  }
`

export default PostPage
