import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleCardWide.css';

export default class ArticleCardWide extends Component {
  goToArticle() {
    window.location = this.props.url;
  }
  render() {
    return (
      <li className="cards__item--wide" onClick={this.goToArticle.bind(this)}>
       <div className="card--wide">
         <img src={this.props.image} alt={this.props.image} />
         <div className="card__content">
           <div className="card__title--large">{this.props.title}</div>
           <p className="card__text--large">{this.props.body}</p>
           <span className="card__body__credits">
            <span className="card__body__credits--byline">
              {this.props.byline}
            </span>
            <span className="card__body__credits--date">
              {this.props.time}
            </span>
           </span>
         </div>
       </div>
     </li>
    );
  }
}

ArticleCardWide.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  byline: PropTypes.string,
  time: PropTypes.string
};
