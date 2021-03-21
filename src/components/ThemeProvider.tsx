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
    primary: "#FFCC70",
  },
  grid: 10,
  font: {
    size: {
      caption: 13,
    },
  },
}

const darkTheme = {
  ...theme,
  color: {
    ...theme.color,
    primary: "#4158D0",
  }
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
  const isDarkMode = darkMode === "dark";
  return (
    <StyledThemeProvider
      theme={{
        ...(isDarkMode ? theme : darkTheme),
        darkModeLoading: darkMode === null,
        darkMode: isDarkMode,
        toggleDarkMode,
      }}
    >
      <Helmet
        meta={[
          {
            name: "theme-color",
            content:
              isDarkMode ? theme.color.blackDark : theme.color.primary,
          },
        ]}
      />
      {props.children}
    </StyledThemeProvider>
  )
}
