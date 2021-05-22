import random
from words import words_list

# function to get random hangman word from computer


def get_word():
    word = random.choice(words_list)
    return word.upper()

# function to play game


def play(word):
    # game setup declarations
    word_completion = "_" * len(word)
    guessed = False
    guessed_letters = []
    guessed_words = []
    lives = 6

    # user prompt
    print("\nWelcome! Let's play Hangman!")
    print("You have 6 lives until the end")
    print(display_hangman(lives))  # current state of hangman
    print(word_completion)  # word
    print("\n")

    # logic conditionals
    while not guessed and lives > 0:
        guess = input("Please guess a letter or word: ").upper()
        if len(guess) == 1 and guess.isalpha():
            if guess in guessed_letters:  # repeated correct guess
                print("You already guessed the letter: ", guess)
            elif guess not in word:  # incorrect guess
                print(guess, "is not in the word.")
                lives -= 1
                # append guess to guessed letters
                guessed_letters.append(guess)
            else:
                print("Good job, ", guess, " is the letter!")
                guessed_letters.append(guess)
                # convert word_completion string to a list
                word_list = list(word_completion)
                indices = [i for i, letter in enumerate(
                    word) if letter == guess]
                for index in indices:
                    word_list[index] = guess
                # convert word list back to string
                word_completion = "".join(word_list)
                if "_" not in word_completion:
                    guessed = True
        elif len(guess) == len(word) and guess.isalpha():
            if guess in guessed_words:
                print("You already guessed the word: ", guess)
            elif guess != word:
                print(guess, "is not in the word.")
                lives -= 1
                guessed_words.append(guess)  # append guess to guessed words
            else:
                guessed = True
                word_completion = word
        else:
            print("Not a valid guess")
        print(display_hangman(lives))
        print(word_completion)
        print("\n")
    if guessed:
        print("Congrats, you guessed the word! You win!")
    else:
        print("Sorry, you ran out of lives. The word was " +
              word + ". Maybe next time!")

# function to visually display hangman stages


def display_hangman(lives):
    stages = ["""
        --------
        |      |
        |      O
        |     \\|/
        |      |
        |     / \\
        -
     """,
              """
        --------
        |      |
        |      O
        |     \\|/
        |      |
        |     /
        -
     """,
              """
        --------
        |      |
        |      O
        |     \\|/
        |      |
        |     
        -
     """,
              """
        --------
        |      |
        |      O
        |     \\|
        |      |
        |     
        -
     """,
              """
        --------
        |      |
        |      O
        |      |
        |      |
        |     
        -
     """,
              """
        --------
        |      |
        |      O
        |      
        |      
        |     
        -
     """,
              """
        --------
        |      |
        |      
        |      
        |      
        |     
        -
     """
              ]
    return stages[lives]

# main function


def main():
    word = get_word()
    play(word)
    while input("Play Again? (Y/N) ").upper() == "Y":
        word = get_word()
        play(word)
    print("Thank you for playing hangman! See you again!")


# conditional ensuring the script runs in command line
if __name__ == "__main__":
    main()
