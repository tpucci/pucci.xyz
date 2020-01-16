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
    black: "#000000",
    white: "#FFFFFF",
    grayLight: "#F3F3F3",
    primary: "#FFA900",
  },
  grid: 10,
  font: {
    size: {
      caption: 13,
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
