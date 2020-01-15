import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface Props {
  style: object
}

export const BioImage = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "thomasp.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      objectFit="contain"
      objectPosition="50% 0%"
      alt="Thomas Pucci profile image"
      imgStyle={{
        objectFit: "contain",
      }}
      style={props.style}
    />
  )
}
