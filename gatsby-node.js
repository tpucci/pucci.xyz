const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    // Create index page
    createPage({
      path: "/",
      component: path.resolve("./src/templates/BlogIndex.tsx"),
    })

    resolve(
      graphql(
        `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  slug
                  fields {
                    directoryName
                    maybeAbsoluteLinks
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
          return
        }

        // Create blog posts pages.
        const posts = result.data.allMdx.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1
              ? null
              : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.slug,
            component: path.resolve("./src/templates/BlogPost.tsx"),
            context: {
              slug: post.node.slug,
              previous,
              next,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (_.get(node, "internal.type") === `Mdx`) {
    createNodeField({
      node,
      name: "directoryName",
      value: path.basename(path.dirname(_.get(node, "fileAbsolutePath"))),
    })

    // Capture a list of what looks to be absolute internal links.
    // We'll later remember which of them have translations,
    // and use that to render localized internal links when available.

    // TODO: check against links with no trailing slashes
    // or that already link to translations.
    const markdown = node.internal.content
    let maybeAbsoluteLinks = []
    let linkRe = /\]\((\/[^\)]+\/)\)/g
    let match = linkRe.exec(markdown)
    while (match != null) {
      maybeAbsoluteLinks.push(match[1])
      match = linkRe.exec(markdown)
    }
    createNodeField({
      node,
      name: "maybeAbsoluteLinks",
      value:
        _.uniq(maybeAbsoluteLinks).length !== 0
          ? JSON.stringify(_.uniq(maybeAbsoluteLinks))
          : "",
    })
  }
}
