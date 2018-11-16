# Psychic-Game

Requirements - 

1. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
2. Guess what letter I'm thinking of
3. Wins: (# of times the user has guessed the letter correctly)
4. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
5. Guesses Left: (# of guesses left. This will update)
6. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
7. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
8. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

Problem - Need to create a Pyschic Game. The game takes in the user input via the keyboard and compares it to a random letter. The game will keep track of wins and losses

Solution / Technical Approach - Created an array to store each letter of the alphabet and an array to store the letters of incorrect guesses so the user could easily identify what had already been guessed. Set variables for wins and losses to keep track of the players record. Set a counter to keep track of the number of guesses a player can have in a game. Used a document.keyup function to track the user input and a math.random method to get a random letter for each turn. Wrote the variables, arrays etc to the page so it is viewable to the user. Finally, used a reset function to clear out the letters guessed array and to reset the variables for wins and losses. 
