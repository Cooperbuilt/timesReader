import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleCard.css';

export default class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.setImage = this.setImage.bind(this);
    this.state = {
      image: this.props.image
    };
  }

  goToArticle() {
    window.location = this.props.url;
  }

  setImage() {
    return this.state.image;
  }

  render() {
    const image = this.setImage();
    console.log(image);
    const imageStyle = {
      flex: '1',
      minWidth: '250px',
      minHeight: '250px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: "url("+ image  + ")"
    }
    return (
      <li className="cards__item" onClick={this.goToArticle.bind(this)}>
       <div className="card">
         <div style={imageStyle}></div>
         <div className="card__content">
           <div className="card__title">{this.props.title}</div>
           <p className="card__text">{this.props.body}</p>
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

ArticleCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  byline: PropTypes.string,
  time: PropTypes.string
};
