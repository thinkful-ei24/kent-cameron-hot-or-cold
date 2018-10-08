const MAKE_GUESS = 'MAKE_GUESS';
const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

const NEW_GAME = 'NEW_GAME';
const newGame = () => ({
  type: NEW_GAME
});
