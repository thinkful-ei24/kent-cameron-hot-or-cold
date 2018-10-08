import { NEW_GAME, MAKE_GUESS } from '../actions/actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const reducer = (state = initialState, action) => {
  if (action.type === NEW_GAME) {
    return(
      Object.assign({}, initialState, {correctAnswer: Math.floor(Math.random() * 100) + 1})
    ) 
  } else if (action.type = MAKE_GUESS) {
    const makeGuess = (guess, state)=> {
      guess = parseInt(guess, 10);
      if (isNaN(guess)) {
        return 'Please enter a valid number';
      }
  
      const difference = Math.abs(guess - state.correctAnswer);
  
      let feedback;
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
    return(
      feedback
    ) ;
    };
  if(makeGuess(action.guess)==='Please enter a valid number'){
    return Object.assign({}, state, {feedback: makeGuess(action.guess)})
  } else {
    return (Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: makeGuess(action.guess)}))
  } 
  } else {
    return state;
  }
}