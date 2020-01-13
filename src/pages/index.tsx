import React from "react"
import { Link } from "gatsby"

import { Page } from "../components/Page"
import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Page>
)

export default IndexPage
