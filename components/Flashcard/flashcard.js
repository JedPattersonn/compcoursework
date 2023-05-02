import { useState, useEffect } from "react";

const Flashcard = ({ term, definition, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    setIsFlipped(false);
    setCorrect(null);
  }, [term, definition]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCorrect = (e) => {
    e.stopPropagation();
    setCorrect(true);
    onAnswer(true);
  };

  const handleIncorrect = (e) => {
    e.stopPropagation();
    setCorrect(false);
    onAnswer(false);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-64 h-48 mx-auto my-4 bg-white shadow-lg transition-transform duration-700 ease-in-out transform cursor-pointer ${
        isFlipped ? "rotate-y-180" : ""
      }`}
    >
      {!isFlipped && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="font-bold text-xl">{term}</div>
        </div>
      )}

      {isFlipped && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transform rotate-y-180">
          <div className="mb-4 text-center">{definition}</div>
          <div>
            <button
              onClick={handleCorrect}
              className="px-4 py-2 mr-2 text-white bg-green-500 rounded"
            >
              Correct
            </button>
            <button
              onClick={handleIncorrect}
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              Incorrect
            </button>
          </div>
        </div>
      )}

      {correct !== null && (
        <div className="absolute top-0 left-0 p-2">
          <span
            className={`text-lg font-bold ${
              correct ? "text-green-500" : "text-red-500"
            }`}
          >
            {correct ? "✓" : "✗"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
