const { slugify } = require("./src/util/functions")
const path = require("path")
const authors = require("./src/util/authors")
const _ = require("lodash")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
    sunglePost: path.resolve("./src/templates/single-post.js"),
    tagsPage: path.resolve("./src/templates/tags-page.js"),
    tagPosts: path.resolve("./src/templates/tag-posts.js"),
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.sunglePost,
        context: {
          slug: node.fields.slug,
          imageUrl: authors.find(
            author => author.name === node.frontmatter.author
          ).imageUrl,
        },
      })
    })

    let tags = []

    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    let tagPostCounts = {} // { tutorial: 2, design: 1}
    tags.forEach(tag => {
      // Or 0 cause it might not exist yet
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    tags = _.uniq(tags)

    createPage({
      path: `/tags`,
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    // create tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag, 
        }
      })
    });

  })
}
