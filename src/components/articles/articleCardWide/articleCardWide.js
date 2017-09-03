import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './articleCardWide.css';

export default class ArticleCardWide extends Component {
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
    if (this.state.image === ""){
      return {
        display: 'none'
      }
    } else {
      return {
        flex: '1',
        minWidth: '250px',
        minHeight: '250px',
        padding: '20px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: "url("+ this.state.image  + ")"
      }
    }
  }

  render() {
    const imageStyle = this.setImage();
    return (
      <li className="cards__item--wide" onClick={this.goToArticle.bind(this)}>
       <div className="card--wide">
         <div className="card__content">

           <div className="card__content__top">

            <div className="card__content__top--text">
              <div className="card__title--large">{this.props.title}</div>
              <span className="card__body__credits">
                <span className="card__body__credits--byline">
                  {this.props.byline}
                </span>
                <span className="card__body__credits--date">
                  {this.props.time}
                </span>
              </span>
            </div>
          <div style={imageStyle}></div>

          </div>
           <p className="card__text--large">{this.props.body}</p>
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
