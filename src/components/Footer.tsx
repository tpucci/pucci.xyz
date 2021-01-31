import React from "react"
import { FooterNote } from "../atoms/Text"

export function Footer() {
  return (
    <footer>
      <FooterNote>
        <a href="https://twitter.com/Thomas_Pucci" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        {" - "}
        <a href="https://github.com/tpucci" target="_blank" rel="noopener noreferrer">
          github
        </a>
        {" - "}
        <a href="https://fr.linkedin.com/in/thomaspucci" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </FooterNote>
    </footer>
  )
}
