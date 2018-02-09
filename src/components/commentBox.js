import React, { Component } from 'react';
import CommentInput from './commentInput'
import CommentList from './commentList'
import commentAction from '../actions/commentAction'
import commentStore from '../stores/commentStore'

class CommentBox extends Component {
  constructor() {
    super()
    this.state = {
      comment: commentStore.getComment()
    }
  }

  componentDidMount() {
    commentStore.addListener(() => this.setState({
      comment: commentStore.getComment()
    }))
  }

  handleSearch() {
    commentAction.submit()
  }

  render() {
    return (
      <div>
        <CommentInput handleSearch={this.handleSearch.bind(this)} />
        <CommentList comment={this.state.comment} />
      </div>
    )
  }
}

export default CommentBox