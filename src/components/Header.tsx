import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import { DarkModeToggle } from "./DarkModeToggle"
import styled from "styled-components"
import { BlogTitle } from "../atoms/Text"

interface Props {
  indexPage?: Boolean
}

export function Header(props: Props) {
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
      <Link to="/">
        <BlogTitle indexPage={props.indexPage}>
          {data.site.siteMetadata.title}
        </BlogTitle>
      </Link>
      <DarkModeToggle />
    </Container>
  )
}

const Container = styled.header`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.grid * 5}px;
`
