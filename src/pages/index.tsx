import React from "react"
import { Link } from "gatsby"

import { Page } from "../components/Page"
import Image, { BioImage } from "../atoms/BioImage"
import SEO from "../components/Seo"
import styled from "styled-components"

const IndexPage = () => (
  <Page>
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
          #management
        </BioParagraph>
      </BioDescription>
      <BioImage />
    </Aside>
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

const BioTitle = styled.h1`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  text-rendering: optimizeLegibility;
  margin-top: ${({ theme }) => theme.grid}px;

  & > span {
    color: ${({ theme }) => theme.color.primary};
    position: relative;
    z-index: 0;

    &::after {
      content: "";
      display: block;
      height: ${({ theme }) => theme.grid * 2}px;
      background-color: ${({ theme }) =>
        theme.darkMode ? theme.color.black : theme.color.white};
      transition: background-color 0.25s ease-in-out;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 15px;
      z-index: -1;
    }
  }
`

const BioParagraph = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-rendering: optimizeLegibility;
`

export default IndexPage
