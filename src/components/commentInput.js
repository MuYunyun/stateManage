import React, { Component } from 'react';

class ComponentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <button onClick={this.props.handleSearch.bind(this, this.state.value)}>查询</button>
      </div>
    );
  }
}

export default ComponentInput