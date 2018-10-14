import React, { Component } from 'react';

// Components
import Question from './Question';

// Styling
import './QuestionsList.css';

class QuestionsList extends Component {
  render() {
    const { questions, removeQuestion } = this.props;

    return (
      <ul className="QuestionsList">
        { questions.map( question => (
          <Question
            id = { question.id }
            key = { question.id.toString() }
            question = { question }
            removeQuestion = { removeQuestion }
          />
        )) }

      </ul>
    );
  }
}

export default QuestionsList;
