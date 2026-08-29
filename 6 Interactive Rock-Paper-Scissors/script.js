/*
    ALGORITHM: Rock-Paper-Scissors (with Autoplay & LocalStorage)

    1. SETUP:
       - Load `score` object from LocalStorage (`wins`, `losses`, `ties`).
       - If null, set default score `{ wins: 0, losses: 0, ties: 0 }`.
       - Get the score, result, and moves display elements.
       - Declare state variables: `isAutoPlaying = false`, `intervalId = null`.

    2. HELPER FUNCTIONS:
       - `pickComputerMove()`:
           - Generate `Math.random()`.
           - If 0 to <1/3 return 'rock'; if 1/3 to <2/3 return 'paper'; else return 'scissors'.
       - `updateScoreElement()`:
           - Update DOM text with current wins, losses, and ties.
       - `saveScore()`:
           - Save `score` object to LocalStorage via `JSON.stringify()`.

    3. GAME LOGIC (`playGame(playerMove)`):
       - Call `pickComputerMove()` to get computer choice.
       - Compare `playerMove` with computer move to determine result ('You win.', 'You lose.', or 'Tie.').
       - Update `score` object properties accordingly.
       - Save updated score to LocalStorage.
       - Update result display, moves display (icons/text), and call `updateScoreElement()`.

    4. AUTOPLAY & CONTROLS:
       - `autoPlay()`:
           - If `!isAutoPlaying`, set `intervalId = setInterval(() => { playGame(pickComputerMove()); }, 1000)` and set `isAutoPlaying = true`.
           - Else, `clearInterval(intervalId)` and set `isAutoPlaying = false`.
       - Add event listeners for buttons ("Rock", "Paper", "Scissors", "Reset Score", "Autoplay").
       - Add `keydown` event listener to `document.body` for keyboard shortcuts (`r`, `p`, `s`, `a`, `Backspace`).
*/

// WRITE YOUR CODE BELOW:
