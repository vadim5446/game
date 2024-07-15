My game project.

START GAME
  - Initialize the game (choose word, set guesses)
  - WHILE incorrect guesses < max attempts
      - Display current state of the word
      - Get player's letter guess
      - IF letter is correct AND not guessed before
          - Reveal letter(s) in word
          - Add letter to guessed letters
      - ELSE
          - Increment incorrect guess count
      - IF all letters in word are guessed
          - Display victory message
          - END GAME
  - IF incorrect guesses == max attempts
      - Display game over message
      - END GAME
END GAME


