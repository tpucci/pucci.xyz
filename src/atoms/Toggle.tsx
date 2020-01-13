import React, { ComponentType, useContext } from "react"
import styled, { ThemeContext, keyframes, css } from "styled-components"

interface Props {
  DisableIcon: ComponentType
  EnableIcon: ComponentType
}

export function Toggle({ DisableIcon, EnableIcon, toggled, onToggle }: Props) {
  const theme = useContext(ThemeContext)
  const iconStyle = {
    width: theme.font.size.caption,
    transition: "opacity 0.25s linear",
  }
  return (
    <Container onClick={() => onToggle(!toggled)}>
      <DisableIcon
        style={{ marginLeft: 4, opacity: toggled ? 1 : 0, ...iconStyle }}
      />
      <Thumb className="Toggle--Thumb" style={{ left: toggled ? 23 : 0 }} />
      <EnableIcon
        style={{ marginRight: 4, opacity: toggled ? 0 : 1, ...iconStyle }}
      />
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  const BORDER_WIDTH = 1
  const HEIGHT = (theme.grid + BORDER_WIDTH) * 2
  return css`
    position: relative;
    width: ${theme.grid * 4.5}px;
    height: ${HEIGHT}px;
    background-color: ${theme.color.blackLight};
    border-radius: ${HEIGHT / 2}px;
    border: ${BORDER_WIDTH}px solid ${theme.color.blackLight};
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      .Toggle--Thumb {
        box-shadow: 0px 0px 2px 3px ${theme.color.primary};
      }
    }
  `
})

const Thumb = styled.div(
  ({ theme }) => css`
    position: absolute;
    width: ${theme.grid * 2}px;
    height: ${theme.grid * 2}px;
    background-color: ${theme.color.white};
    border-radius: ${theme.grid}px;
    transition: left 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
      box-shadow 0.15s linear;
  `
)
