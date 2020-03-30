import React from "react"

import { Row, Card, CardBody, CardTitle, Button, CardText } from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import authors from "../util/authors"
import { slugify } from "../util/functions"

import JohnImage from "../images/john.png"
import JaneImage from "../images/jane.png"

const TeamPage = () => (
  <Layout headline="Team Page">
    <SEO title="Team" />
    <Row className="mb-4">
      <div className="col-md-3">
        <img style={{ maxWidth: "100%" }} src={JohnImage} alt="John profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img style={{ maxWidth: "100%" }} src={JaneImage} alt="Jane profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button
              color="primary"
              href={`/author/${slugify(authors[1].name)}`}
            >
              View posts
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
