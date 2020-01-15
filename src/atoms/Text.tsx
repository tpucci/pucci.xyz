import React from "react"
import styled, { css } from "styled-components"

export const BlogTitle = styled.h1`
  ${({ theme }) => theme.font.css.blogTitle}
  margin-bottom: 0;
`
