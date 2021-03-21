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
  font-style: normal;
  font-weight: 300;
  ${responsiveFontSize(24, 20, 18)}
  text-rendering: optimizeLegibility;
  margin-bottom: 0;
  color: "inherit";
`

export const BioTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(36, 30, 24)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
  margin-bottom: ${({ theme }) => theme.grid}px;
  margin-top: ${({ theme }) => theme.grid}px;

  & > span {
    position: relative;
    z-index: 0;
    font-weight: bold;

    &::after {
      content: "";
      display: block;
      height: ${({ theme }) => theme.grid}px;
      background-image: url(/underline.svg);
      transition: background-color 0.25s ease-in-out;
      position: absolute;
      width: 100%;
      top: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      left: 0px;
      z-index: -1;
    }
  }
`

export const MiniBioTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(22, 20, 18)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
  margin-bottom: ${({ theme }) => theme.grid}px;
  margin-top: 0;

  & > span {
    font-weight: bold;
    position: relative;
    z-index: 0;

    &::after {
      content: "";
      display: block;
      height: ${({ theme }) => theme.grid}px;
      background-image: url(/underline.svg);
      transition: background-color 0.25s ease-in-out;
      position: absolute;
      width: 100%;
      top: 100%;
      left: 0px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: -1;
    }
  }
`

export const BioParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(24, 20, 16)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
`

export const MiniBioParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(20, 18, 16)}
  text-rendering: optimizeLegibility;
  line-height: 150%;
`

export const FooterNote = styled.p`
  font-style: normal;
  font-weight: 300;
  ${responsiveFontSize(16, 14, 12)}
  text-rendering: optimizeLegibility;

  & > a {
    text-decoration: underline;
  }
`

export const ArticleTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  ${responsiveFontSize(24, 20, 18)}
  line-height: 150%;
  padding-bottom: 10px;
  background: -webkit-linear-gradient(275deg,#FFCC70 -10%,#C850C0,#4158D0 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ArticleMetadata = styled.small`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(20, 18, 16)}
  padding-bottom: 5px;
  line-height: 150%;
  text-rendering: optimizeLegibility;
`

export const ArticleSpoiler = styled.p`
  font-style: normal;
  font-weight: 400;
  ${responsiveFontSize(22, 20, 18)}
  text-rendering: optimizeLegibility;
`
