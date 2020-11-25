import React from "react"
import { Link, graphql } from "gatsby"

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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`

const IndexPage = (props: any) => {
  const post = props.data.markdownRemark
  const lang = post.fields.langKey
  let {
    previous,
    next,
    slug,
    translations,
    translatedLinks,
  } = props.pageContext

  // Replace original links with translated when available.
  let html = post.html
  translatedLinks.forEach((link: any) => {
    // jeez
    function escapeRegExp(str: string) {
      return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    let translatedLink = "/" + lang + link
    html = html.replace(
      new RegExp('"' + escapeRegExp(link) + '"', "g"),
      '"' + translatedLink + '"'
    )
  })

  translations = translations.slice()
  translations.sort((a: string, b: string) => {
    return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1
  })

  // TODO: this curried function is annoying
  const languageLink = createLanguageLink(slug, lang)
  const enSlug = languageLink("en")
  const editUrl = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/edit/master/src/pages/${enSlug.slice(
    1,
    enSlug.length - 1
  )}/index${lang === "en" ? "" : "." + lang}.md`
  const discussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://thomaspucci.com${enSlug}`
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
            <p>
              {formatPostDate(post.frontmatter.date, lang)}
              {` - ${formatReadingTime(post.timeToRead)}`}
            </p>
            {translations.length > 0 && (
              <Translations
                translations={translations}
                editUrl={editUrl}
                languageLink={languageLink}
                lang={lang}
              />
            )}
          </header>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
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

export default IndexPage
