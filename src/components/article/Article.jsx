import React from 'react';
import PropTypes from 'prop-types';

// display title, author, description
const Article = ({ title, author, description, urlToImage }) => {
  return (
    <figure>
      <img src={urlToImage} alt={title} />
      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
    </figure>
  );
};

Article.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
};

export default Article;
