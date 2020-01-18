import React from "react"
import { Link } from "gatsby"

import { Page } from "../components/Page"
import Image, { BioImage } from "../atoms/BioImage"
import SEO from "../components/Seo"
import styled, { css } from "styled-components"
import { BioTitle, BioParagraph } from "../atoms/Text"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <div>test</div>
  </Page>
)

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