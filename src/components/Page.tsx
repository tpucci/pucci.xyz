import React, { ReactChildren } from "react"
import { ThemeProvider } from "./ThemeProvider"
import { Layout } from "./Layout"

interface Props {
  children: ReactChildren
}

export function Page(props: Props) {
  return (
    <ThemeProvider>
      <Layout>{props.children}</Layout>
    </ThemeProvider>
  )
}
