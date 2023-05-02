import { useState, useEffect } from "react";
import Flashcard from "./flashcard";
import Link from "next/link";

const FlashCardHandler = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [flashcards, setFlashcards] = useState([])

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await fetch("/api/fetchCards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: id.toString(),
        }),
      });
      const data = await response.json();
      setFlashcards(data);
    };

    fetchFlashcards();
  }, [id]);

  const handleAnswer = async (isCorrect) => {
    const currentCard = flashcards[currentIndex];
    console.log(currentCard)
    // Make the API call
    await fetch("/api/submitAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardId: currentCard.id,
        correct: isCorrect,
        key: id.toString(),
      }),
    });

    // Update the flashcard index to show the next card
    const newIndex = (currentIndex + 1) % flashcards.length;
    setCurrentIndex(newIndex);

    if (newIndex === 0) {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setFinished(false);
  };

  return (
    <>
      {!finished && flashcards.length > 0 && (
        <Flashcard
          term={flashcards[currentIndex].term}
          definition={flashcards[currentIndex].definition}
          onAnswer={handleAnswer}
        />
      )}

      {finished && (
        <div className="w-64 h-48 mx-auto my-4 p-4 bg-white shadow-lg text-center">
          <h2 className="mb-4 font-bold text-xl">You have finished the set!</h2>
          <button
            onClick={handleRestart}
            className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
          >
            Restart
          </button>
          <Link href="/" passHref>
            <button className="px-4 py-2 text-white bg-green-500 rounded">
              Home
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FlashCardHandler;
