import React, { ReactChildren } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./Header"
import "./style.css"
import { DarkModeToggle } from "./DarkModeToggle"
import styled, { css } from "styled-components"

interface Props {
  children: ReactChildren
}

export function Layout({ children }: Props) {
  return (
    <Container>
      <div
        style={{
          flex: 1,
          maxWidth: 700,
        }}
      >
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}, Thomas Pucci</footer>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div(
  ({ theme }) => css`
    flex-direction: row;
    flex: 1;
    justify-content: center;
    ${!theme.darkModeLoading
      ? css`
          background-color: ${theme.darkMode
            ? theme.color.blackDark
            : theme.color.white};
        `
      : ""}
    transition: background-color 0.25s ease-in-out;
    padding: 0 ${theme.grid * 4}px ${theme.grid * 4}px ${theme.grid * 4}px;
  `
)
