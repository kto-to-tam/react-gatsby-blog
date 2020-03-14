import React from 'react';
import PropTypes from 'prop-types';
import { slugify } from "../util/functions";
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap';

const Post = ({ title, date, author, body, path, fluid, tags }) => {
  return (
    <Card>
      <Link to={path}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={path}>
            {title}
          </Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> by{' '}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          { tags.map(tag => (
            <li>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase" >{tag}</Badge>
              </Link>
            </li>
          )) }
        </ul>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  fluid: PropTypes.any,
  tags: PropTypes.array.isRequired
};

export default Post;
