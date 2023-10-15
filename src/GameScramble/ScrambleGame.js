import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import wordList from "./WordList";
import WordBubble from "./WordBubble";
import WordContainer from "./WordContainer";
import "./ScrambleGame.css";
import { Link } from "react-router-dom";

function shuffleWord(word) {
  const wordArray = word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  return wordArray.join("");
}

function ScrambleGame() {
  const { difficulty } = useParams();

  const [currentWord, setCurrentWord] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);

  const [scrambledWord, setScrambledWord] = useState("");
  const [playerGuess, setPlayerGuess] = useState("");
  const [submittedGuess, setSubmittedGuess] = useState("");

  useEffect(() => {
    const filteredWords = wordList.filter((word) => word.level === difficulty);
    const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];

    const jumbledWord = shuffleWord(randomWord.unjumbledWord);
    setScrambledWord(jumbledWord); // Set scrambledWord here

    setCurrentWord({ ...randomWord, jumbledWord });
    setIsCorrect(false);
    setPlayerGuess("");
  }, [difficulty]);

  const handleWordUnscrambled = (letter) => {
    const updatedWord = scrambledWord.replace(letter, "");
    setPlayerGuess(playerGuess + letter);

    if (!updatedWord) {
      setIsCorrect(true);
    }
  };

  const handleSubmission = () => {
    if (playerGuess === currentWord.unjumbledWord) {
      setSubmittedGuess(playerGuess);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNewWord = () => {
    // Reload the page to get a new word
    window.location.reload();
  };

  return (
    <div className="scramble-game">
      <h1>Words for Change</h1>
      <p>Unscramble the word:</p>
      <div className="scrambled-word">
        {scrambledWord.split("").map((letter, index) => (
          <WordBubble
            key={index}
            letter={letter}
            onWordUnscrambled={handleWordUnscrambled}
          />
        ))}
      </div>
      {currentWord.unjumbledWord && (
        <WordContainer
          unscrambledWord={currentWord.unjumbledWord}
          playerGuess={playerGuess}
          isCorrect={isCorrect}
          onWordUnscrambled={handleWordUnscrambled}
        />
      )}

      <div className="guess-section">
        <input
          type="text"
          placeholder="Enter your guess"
          value={playerGuess}
          onChange={(e) => setPlayerGuess(e.target.value)}
        />
        <button onClick={handleSubmission}>Submit</button>
        <button onClick={handleNewWord}>Get New Word</button>
      </div>

      {isCorrect && (
        <p>
          {playerGuess === currentWord.unjumbledWord
            ? "\nCorrect! The word is " + submittedGuess
            : "Incorrect. Keep trying!"}
          <br /> {currentWord.meaning}
        </p>
      )}


      <div className="game-buttons">
        <Link to="/scramble">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ScrambleGame;
