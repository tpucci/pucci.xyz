import React, {
  ReactChildren,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react"
import {
  ThemeProvider as StyledThemeProvider,
  ThemeContext,
  css,
} from "styled-components"
import { Helmet } from "react-helmet"

interface Props {
  children: ReactChildren
}

const theme = {
  color: {
    blackLight: "#313131",
    blackDark: "#222222",
    white: "#FFFFFF",
    primary: "#FFA900",
  },
  grid: 10,
  font: {
    size: {
      caption: 13,
    },
    css: {
      blogTitle: css`
        font-family: Open Sans, -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        text-rendering: optimizeLegibility;
      `,
    },
  },
}

type Theme = typeof theme & {
  darkMode: Boolean
  toggleDarkMode: Function<void>
  darkModeLoading: Boolean
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}

export function ThemeProvider(props: Props) {
  const [darkMode, setDarkMode] = useState(null)
  const toggleDarkMode = enableDarkMode => {
    window.__setPreferredTheme(enableDarkMode ? "dark" : "light")
  }
  useEffect(() => {
    setDarkMode(window.__theme)
    window.__onThemeChange = () => {
      setDarkMode(window.__theme)
    }
  }, [])
  return (
    <StyledThemeProvider
      theme={{
        ...theme,
        darkModeLoading: darkMode === null,
        darkMode: darkMode === "dark",
        toggleDarkMode,
      }}
    >
      <Helmet
        meta={[
          {
            name: "theme-color",
            content:
              darkMode === "dark" ? theme.color.blackDark : theme.color.primary,
          },
        ]}
      />
      {props.children}
    </StyledThemeProvider>
  )
}
