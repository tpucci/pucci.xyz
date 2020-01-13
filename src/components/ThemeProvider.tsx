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
  },
}

type Theme = typeof theme & {
  darkMode: Boolean
  toggleDarkMode: Function<void>
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
      theme={{ ...theme, darkMode: darkMode === "dark", toggleDarkMode }}
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
