import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { question, removeQuestion } = this.props;

    return (
      <li>{ question.question }
        <button onClick={ () => removeQuestion( question.id ) }>
          Remove
        </button>
      </li>
    );
  }
}

export default Question;
