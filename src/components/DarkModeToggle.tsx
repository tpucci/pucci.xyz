import React, { useContext } from "react"
import { useTheme } from "./ThemeProvider"
import { Toggle } from "../atoms/Toggle"
import { Moon } from "../atoms/Moon"
import { Sun } from "../atoms/Sun"

export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme()
  if (darkMode === undefined) return null
  return (
    <Toggle
      EnableIcon={Sun}
      DisableIcon={Moon}
      toggled={darkMode}
      onToggle={toggleDarkMode}
    />
  )
}
