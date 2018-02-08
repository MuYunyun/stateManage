import React, { Component } from 'react';

// 无状态函数 这个函数类似 View
function List(props) {
  return (
    <div>
      {props.data.map(r =>
        <p key={r.id}>{r.content}</p>
      )}
    </div>
  )
}

const Promised = (ListComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      error: null,
    }
  }

  componentDidMount() {
    this.props.fetchPromise
      .then((res) => res.json())
      .then(result => this.setState({ list: result.data }))
      .catch(err => this.setState({ error: err }))
  }

  render() {
    if (this.state.error) {
      return <span>'error'</span>
    }

    return (
      <ListComponent data={this.state.list} />
    )
  }
}

export default Promised(List);