import React from "react"
import styled, { css } from "styled-components"

const responsiveFontSize = (
  fontSize: number,
  fontSizeOnMedium: number,
  fontSizeOnSmall: number
) => css`
  font-size: ${fontSize}px;
  @media (max-width: 600px) {
    font-size: ${fontSizeOnMedium}px;
  }
  @media (max-width: 400px) {
    font-size: ${fontSizeOnSmall}px;
  }
`

export const BlogTitle = styled.h1`
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 300;
  ${responsiveFontSize(24, 20, 18)}
  text-rendering: optimizeLegibility;
  margin-bottom: 0;
  color: ${({ indexPage, theme }) =>
    indexPage ? "inherit" : theme.color.primary};
`

export const BioTitle = styled.h1`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(36, 30, 24)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
  margin-bottom: ${({ theme }) => theme.grid}px;
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
  }
`

export const MiniBioTitle = styled.h3`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(22, 20, 18)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
  margin-bottom: ${({ theme }) => theme.grid}px;
  margin-top: 0;

  & > span {
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
      bottom: -3px;
      left: 5px;
      z-index: -1;
    }
  }
`

export const BioParagraph = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(24, 20, 16)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
`

export const MiniBioParagraph = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(20, 18, 16)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
`

export const FooterNote = styled.p`
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 300;
  ${responsiveFontSize(16, 14, 12)}
  text-rendering: optimizeLegibility;

  & > a {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`

export const ArticleTitle = styled.h3`
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  ${responsiveFontSize(24, 20, 18)}
  line-height: 150%;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.color.primary};
`

export const ArticleMetadata = styled.small`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(20, 18, 16)}
  padding-bottom: 5px;
  line-height: 150%;
  text-rendering: optimizeLegibility;
`

export const ArticleSpoiler = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(22, 20, 18)}
  text-rendering: optimizeLegibility;
`
