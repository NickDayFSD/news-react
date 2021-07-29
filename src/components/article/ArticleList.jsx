import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

// Display a list of article components
const ArticleList = ({ articles }) => {
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article {...article} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticleList;
