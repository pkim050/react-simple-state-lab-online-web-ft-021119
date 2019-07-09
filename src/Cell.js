import React, { Component } from 'react';
import {pattern1} from './data';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }
  changeColor = () => {
    this.setState({
      color: "#A9A9A9"
    })
  }
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    )
  }
}
