import React, { Component } from 'react';

class ComponentList extends Component {
  render() {
    return (
      <div>
        {this.props.comment.map(r =>
          <p key={r.id}>{r.content}</p>
        )}
      </div>
    )
  }
}

export default ComponentList