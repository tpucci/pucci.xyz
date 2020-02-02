import React from "react"
import { ThemeProvider } from "./ThemeProvider"
import { Layout } from "./Layout"

interface Props {
  children: any
  indexPage?: boolean
}

export function Page(props: Props) {
  return (
    <ThemeProvider>
      <Layout indexPage={props.indexPage}>{props.children}</Layout>
    </ThemeProvider>
  )
}
