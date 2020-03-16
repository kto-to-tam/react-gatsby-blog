import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../util/functions"
import { Button, Badge } from "reactstrap"

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext

  return (
    <Layout headline="All tags">
      <SEO title="All tags" />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage
