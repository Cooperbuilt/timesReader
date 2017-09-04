import React, { Component } from 'react';
import Nav from '../nav/nav';
import Articles from '../articles/articles';
import Pagination from 'rc-pagination';
import * as Api from '../../utils/api';
import PropTypes from 'prop-types';
import './dataContainer.css';
import './rc-pagination.css';

class DataContainer extends Component {
  constructor(props) {
    super(props);
    this.onIdentifierStatusChange = this.onIdentifierStatusChange.bind(this);
    this.state = {
      data: null,
      desk: this.props.desk,
      current: 0,
      search: '',
      total: 0
    };
  }

  pageChange = (page)=> {
    this.setState({
      current: page
    },() => {
      const offset = this.state.current;
      Api.getStories(this.state.desk, offset)
      .then(body => {
        this.setState({
          data: body.response,
        })
      })
    })
  }

  onIdentifierStatusChange = (e ,value) => {
      if (e.charCode === 13) {
        this.setState({ desk: this.state.search.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())})
        Api.getStories(this.state.desk, this.state.current, this.state.search)
        .then(body => {
          this.setState({
            data: body.response,
            total: body.response.meta.hits
          })
        })
      }
      if (e.keyCode === 13) {
        this.setState({
          // Convert search to Title Case with regex
          desk: this.state.search.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase())
        })
        Api.getStories(this.state.desk, this.state.current, this.state.search)
        .then(body => {
          this.setState({
            data: body.response,
            total: body.response.meta.hits
          })
        })
      }
      this.setState({ search: value });
    }

  componentDidMount() {
    if (this.state.search.length > 1) {
      Api.getStories(this.state.search, this.state.current)
      .then(body => {
        this.setState({
          data: body.response,
          total: body.response.meta.hits
        })
      })
    } else {
    Api.getStories(this.state.desk, this.state.current)
      .then(body => {
        this.setState({
          data: body.response,
          total: body.response.meta.hits
        })
      })
    }
  }


  // TODO: Fix hard-height on the loading section.
  // Fixed height currently set on loading p tag to prevent an overflow scrolling
  // Bar from flashing in and out on loading and loaded
  render() {
    if (!this.state.data) return (
      <div>
        <Nav />
        <p className="datacontainer--loading"> Loading... </p>
        <div className="datacontainer__body__pages">
          <Pagination current={this.state.current} onChange={this.pageChange} total={Math.floor(this.state.total / 10) } />
        </div>
      </div>
    )
    return (
      <div>
        <Nav update={this.onIdentifierStatusChange} />
        <div className="datacontainer__body">
          <h1>Top {this.state.desk} News Stories</h1>
          <Articles articles={this.state.data} />
        </div>
        <div className="datacontainer__body__pages">
          <Pagination
            current={this.state.current}
            onChange={this.pageChange}
            total={Math.floor(this.state.total - 10) }
          />
        </div>
      </div>
    );
  }
}

DataContainer.propTypes = {
  desk: PropTypes.string
};

export default DataContainer;
