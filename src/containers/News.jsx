import React, { Component } from 'react';
import SearchBar from '../components/search/Search';
import ArticleList from '../components/article/ArticleList';
import { fetchNews } from '../components/services/newsApi';
import './News.css';

export default class Header extends Component {
  state = {
    text: '',
    loading: false,
    articles: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const news = await fetchNews(this.state.text);
    console.log(news);
    this.setState({ articles: news, loading: false });
  }

  render() {
    const { text, articles, loading } = this.state;

    if(loading) return (
      <img
        src="https://media.giphy.com/media/5b9iSaucUKpukkTQpG/giphy.gif"
        alt="loading"
      />
    );

    return (
      <>
        <SearchBar
          text={text}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}
