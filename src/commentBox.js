import React, { Component } from 'react';
import CommentInput from './commentInput'
import CommentList from './commentList'

class CommentBox extends Component {
  constructor() {
    super()
    this.state = {
      fetchPromise: fetch('./list.json')
    }
  }

  handleSearch() {
    fetch('./submit.json')
      .then((res) => res.json())
      .then(result => result.data ? this.setState({ fetchPromise: fetch('./list.json') }) : '')
  }

  render() {
    return (
      <div>
        <CommentInput handleSearch={this.handleSearch.bind(this)} />
        <CommentList fetchPromise={this.state.fetchPromise} />
      </div>
    )
  }
}

export default CommentBox