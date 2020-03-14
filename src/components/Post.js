import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const Post = ({ title, date, author, body, path }) => {
  return (
    <Card>
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
};

export default Post;
