import React, { Component } from 'react';

// Styling
import './QuestionForm.css';

class QuestionsForm extends Component {
  // Initial state
  state = {
      inputValue: ""
  }

  // Updates state when input field value is changed.
  onInputChange = ( e ) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  onSubmit = ( e ) => {
    e.preventDefault();
  }

  saveQuestion = ( e ) => {
    
    // Form calls callback "addQuestion" with/and sends input field value
    this.props.addQuestion( this.state.inputValue );

    // Sets state of input value to empty
    this.setState({
      inputValue: ""
    });
  }

  render() {
    return (
      <form className="QuestionForm" onSubmit={ this.onSubmit } >
        <input onChange={ this.onInputChange } value={ this.state.inputValue } />
        <button onClick={ this.saveQuestion }>Add</button>
      </form>
    );
  }
}

export default QuestionsForm;
