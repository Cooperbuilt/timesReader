import React, { Component } from 'react';
import ArticleCard from './articleCard/articleCard';
import ArticleCardWide from './articleCardWide/articleCardWide';
import convertTime from 'convert-time';
import PropTypes from 'prop-types';
import './articles.css';

const getImageUrl = (doc) => {
  return doc.multimedia.length > 1 ?
    "https://www.nytimes.com/" + doc.multimedia[0].url
    :
    "http://www.niemanlab.org/images/nytimes-logo.jpg";
}

const dateComparison = (doc) => {
  Date.prototype.yyyymmdd = function() {
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    return [this.getFullYear(), mm.length===2 ? '' : '0', mm, dd.length===2 ? '' : '0', dd].join('');
  };

  var date = new Date();
  var today = date.yyyymmdd();
  if (doc.pub_date.slice(0,10).replace(/-/gi, '') === today) {
    return convertTime(doc.pub_date.slice(11, 19), 'HH : mm A');
  } else {
    return convertTime(doc.pub_date.slice(11, 19), 'HH : mm A') + ' on ' + doc.pub_date.slice(5,10);
  }
}

const shorten = (str,n) => {
  if (!str) {
    return ' '
  }
  return (str.match(RegExp(".{"+n+"}\\S*"))||[str])[0];
}

export default class Articles extends Component {
  render() {
    const articleList = this.props.articles.docs;
    const firstArticle = articleList.slice(0,1);
    const nextTwoArticles = articleList.slice(1,3);
    const otherArticles = articleList.slice(3);
    const firstArticleUI = firstArticle.map(doc =>
      (
        <ArticleCardWide
          key = {Math.random() + doc.headline.main}
          title = {shorten(doc.headline.main, 90)}
          image = {getImageUrl(doc)}
          body = {shorten(doc.snippet, 400)+ '...'}
          url = {doc.web_url}
          byline = {shorten(doc.byline.original, 40)}
          time = {dateComparison(doc)}
        />
      )
    )
    const noImageArticles = nextTwoArticles.map(doc =>
      (
        <ArticleCard
        key = {Math.random() + doc.headline.main}
        title = {shorten(doc.headline.main, 45)}
        image = {""}
        body = {shorten(doc.snippet, 80)+ '...'}
        url = {doc.web_url}
        byline = {shorten(doc.byline.original, 40)}
        time = {dateComparison(doc)}
      />
      )
    )
    const articleUI = otherArticles.map(doc =>
      (
        <ArticleCard
          key = {Math.random() + doc.headline.main}
          title = {shorten(doc.headline.main, 45)}
          image = {getImageUrl(doc)}
          body = {shorten(doc.snippet, 50)+ '...'}
          url = {doc.web_url}
          byline = {shorten(doc.byline.original, 30)}
          time = {dateComparison(doc)}
        />
      )
    )
    return (
      <ul className="articles__container">
        <div className="articles__container--top">
          {firstArticleUI}
          <div className="articles__container--side">
            {noImageArticles}
          </div>
        </div>
          {articleUI}
      </ul>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.object
}
