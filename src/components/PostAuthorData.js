import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import Img from "gatsby-image"

const PostAuthorData = ({ author, authorFluid }) => {
  return (
    <Card>
      <Img className="card-image-top" fluid={authorFluid} />
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          {author.name}
        </CardTitle>
        <CardText>{author.bio}</CardText>
        <div className="author-social-links text-center">
          <ul>
            <li>
              <a
                href={author.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="fab fa-facebook-f fa-lg" />
              </a>
            </li>
            <li>
              <a
                href={author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <i className="fab fa-twitter fa-lg" />
              </a>
            </li>
            <li>
              <a
                href={author.intagram}
                target="_blank"
                rel="noopener noreferrer"
                className="intagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
            <li>
              <a
                href={author.google}
                target="_blank"
                rel="noopener noreferrer"
                className="google"
              >
                <i className="fab fa-google fa-lg" />
              </a>
            </li>
            <li>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="fab fa-linkedin fa-lg" />
              </a>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  )
}

export default PostAuthorData
