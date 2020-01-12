import { Link } from "gatsby"
import React from "react"

interface Props {
  siteTitle: String[]
}

const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      height: 64,
      display: "flex",
    }}
  >
    <Link to="/">{siteTitle}</Link>
  </header>
)

Header.defaultProps = {
  siteTitle: "",
}

export default Header
