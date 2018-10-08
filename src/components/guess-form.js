import React from 'react';

import './guess-form.css';
import { connect } from 'react-redux';
import {makeGuess} from '../actions/actions'

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    this.props.dispatch(makeGuess(this.input.value))
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  feedback: state.feedback
});

export default connect(mapStateToProps)(GuessForm);
