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
  data: {
    allMdx: {
      edges: Array<{
        node: {
          slug: string
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
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          slug
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
  const posts = get(props, "data.allMdx.edges")
  return (
    <Page indexPage>
      <SEO title="Home" />
      <Aside>
        <BioDescription>
          <BioTitle>
            Hi, I'm <span>Thomas</span>
          </BioTitle>
          <BioParagraph>
            👋 You are in my digital garden 🌳
          </BioParagraph>
        </BioDescription>
        <BioImageContainer>
          <BioImage style={{borderRadius: "50%"}}/>
        </BioImageContainer>
      </Aside>
      <main>
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.slug
          return (
            <Article key={node.slug}>
              <header>
                <ArticleTitle>
                  <Link to={node.slug} rel="bookmark">
                    {title}
                  </Link>
                </ArticleTitle>
                <ArticleMetadata>
                  {formatReadingTime(node.timeToRead)}
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
`

const BioDescription = styled.div`
  flex: 2;
  justify-content: center;
`

const BioImageContainer = styled.div(({ theme }) => {
  return css`
    flex: 1;
    position: relative;
    justify-content: center;
  `
})

export default IndexPage
