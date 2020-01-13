import React, { ReactChildren } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./style.css"
import { DarkModeToggle } from "./DarkModeToggle"
import styled, { css } from "styled-components"

interface Props {
  children: ReactChildren
}

export function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <div
        style={{
          flex: 1,
          maxWidth: 900,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <DarkModeToggle />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div(
  ({ theme }) => css`
    flex: 1;
    align-items: center;
    background-color: ${theme.darkMode
      ? theme.color.blackDark
      : theme.color.white};
    transition: background-color 0.25s ease-in-out;
  `
)
