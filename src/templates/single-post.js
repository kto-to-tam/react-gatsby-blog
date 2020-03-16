import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { slugify } from "../util/functions"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, CardBody, CardSubtitle, Badge } from "reactstrap"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout headline={post.title}>
      <SEO title={post.title} />
      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span> by{" "}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
          <ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary" className="text-uppercase">
                    {tag}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

SinglePost.propTypes = {
  data: PropTypes.object,
}

export default SinglePost
