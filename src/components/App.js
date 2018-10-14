import React, { Component } from 'react';

// Components
import Assignments from './Assignments';
import QuestionsList from './QuestionsList';
import QuestionsForm from './QuestionsForm';

// Styling
import './App.css';

class App extends Component {
  // Initial state.
  state = {
    questions: [
      {
        question: 'What is React?',
        id: 1
      },
      {
        question: 'Never going to give up whom?',
        id: 2
      },
      {
        question: 'Whaaa?',
        id: 3
      }
    ]
  };

  // Handles adding of new question by concatenating questions array with new question
  handleAddQuestion = ( newQuestion ) => {
    let fs = {
      question: newQuestion,
      id: this.state.questions.length + 1
    }
    this.setState({
      questions: [ ...this.state.questions, fs ]
    })
  }

  handleRemoveQuestion = ( id ) => {
    this.setState( prevState => ({
      questions: this.state.questions.filter( question => question.id !== id )
    }));
  }

  render() {
    const { questions } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dekode React Class!</h1>
        </header>

        <div className="App-container">
          <QuestionsForm
            addQuestion = { this.handleAddQuestion }
          />
          <QuestionsList
            questions = { questions }
            removeQuestion = { this.handleRemoveQuestion }
          />
          <Assignments />
        </div>
      </div>
    );
  }
}

export default App;
