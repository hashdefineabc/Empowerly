import React from "react";
import { useDrop } from "react-dnd";

const WordContainer = ({ unscrambledWord, playerGuess, isCorrect, onWordUnscrambled }) => {
  // Define the drop target using useDrop from react-dnd
  const [, drop] = useDrop({
    accept: "word-bubble",
    drop: (item) => {
      onWordUnscrambled(item.letter); // Call the provided onWordUnscrambled function
    },
  });

  return (
    <div ref={drop} className="word-container">
      <p>Unscrambled Word:</p>
      <div className="word-display">
        {unscrambledWord.split("").map((letter, index) => (
          <span key={index} className="word-letter">
            {playerGuess.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
      {isCorrect && <p>Correct! The word is {unscrambledWord}.</p>}
    </div>
  );
};

export default WordContainer;
