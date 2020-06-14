import React from "react"
import { Link, graphql } from "gatsby"

import { Page } from "../components/Page"
import { BioImage } from "../atoms/BioImage"
import SEO from "../components/Seo"
import styled, { css } from "styled-components"
import get from "lodash/get"
import {
  BioTitle,
  BioParagraph,
  ArticleTitle,
  ArticleMetadata,
  ArticleSpoiler,
} from "../atoms/Text"
import { string } from "prop-types"
import { formatPostDate, formatReadingTime } from "../helpers/formatters"

interface Props {
  pageContext: {
    langKey: string
  }
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string
            langKey: string
          }
          frontmatter: {
            date: string
            title: string
            spoiler: string
          }
        }
      }>
    }
  }
}

export const query = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`

const IndexPage = (props: Props) => {
  const langKey = props.pageContext.langKey
  const posts = get(props, "data.allMarkdownRemark.edges")
  return (
    <Page indexPage>
      <SEO title="Home" />
      <Aside>
        <BioDescription>
          <BioTitle>
            Hi, I'm <span>Thomas</span>
          </BioTitle>
          <BioParagraph>
            I post my thoughts and bookmarks
            <br />
            #mobileAppDevelopment #code
            <br />
            #dev
          </BioParagraph>
        </BioDescription>
        <BioImageContainer>
          <BioImage />
          <div className="BioImageProtection" />
        </BioImageContainer>
      </Aside>
      <main>
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <header>
                <ArticleTitle>
                  <Link to={node.fields.slug} rel="bookmark">
                    {title}
                  </Link>
                </ArticleTitle>
                <ArticleMetadata>
                  {formatPostDate(node.frontmatter.date, langKey)}
                  {` - ${formatReadingTime(node.timeToRead)}`}
                </ArticleMetadata>
              </header>
              <ArticleSpoiler>{node.frontmatter.spoiler}</ArticleSpoiler>
            </Article>
          )
        })}
      </main>
    </Page>
  )
}

const Article = styled.article`
  margin-top: ${({ theme }) => theme.grid * 3}px;
  & h3 {
    margin-bottom: 0px;
  }
  & small {
    margin-bottom: ${({ theme }) => theme.grid * 0.5};
  }
`

const Aside = styled.aside`
  flex-direction: row;
  & > div {
    flex: 1;
  }
`

const BioDescription = styled.div`
  justify-content: center;
  & > p {
    margin-right: -50px;
    z-index: 1;
  }
`

const BioImageContainer = styled.div(({ theme }) => {
  const bgColor = theme.darkMode ? theme.color.blackDark : theme.color.grayLight
  return css`
    position: relative;
    justify-content: center;

    & > .BioImageProtection {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      &::after {
        content: "";
        display: block;
        width: 100%;
        padding-top: 100%;
        margin: auto 0;
        background: linear-gradient(to right, ${bgColor}44, ${bgColor}00 20%);
      }
    }
  `
})

export default IndexPage
