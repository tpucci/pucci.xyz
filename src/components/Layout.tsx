import React, { ReactChildren } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import { Footer } from "./Footer"
import "./style.css"
import { DarkModeToggle } from "./DarkModeToggle"
import styled, { css } from "styled-components"

interface Props {
  children: ReactChildren
}

export function Layout({ children }: Props) {
  return (
    <Container>
      <Column>
        <div>
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </Column>
    </Container>
  )
}

const Column = styled.div`
  flex: 1;
  max-width: 700px;
  justify-content: space-evenly;
`

const Container = styled.div(
  ({ theme }) => css`
    flex-direction: row;
    flex: 1;
    justify-content: center;
    ${!theme.darkModeLoading
      ? css`
          background-color: ${theme.darkMode
            ? theme.color.blackDark
            : theme.color.grayLight};
        `
      : ""}
    transition: background-color 0.25s ease-in-out;
    padding: 0 ${theme.grid * 2}px ${theme.grid * 2}px ${theme.grid * 2}px;
  `
)
