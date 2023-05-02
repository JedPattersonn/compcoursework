import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");

  if (req.method === "POST") {
    const { cardId, correct, key } = req.body;

    // Update the card
    await db
      .collection("cards")
      .updateOne(
        { id: parseInt(cardId) },
        {
          $inc: {
            correctCount: correct ? 1 : 0,
            incorrectCount: correct ? 0 : 1,
          },
        }
      );

    // Update the collection object
    await db.collection("revisioncollections").updateOne(
      { key: parseInt(key) },
      {
        $inc: {
          correctCount: correct ? 1 : 0,
          incorrectCount: correct ? 0 : 1,
          amountRevised: 1,
        },
      }
    );

    res.status(200).json({ message: "Answer submitted" });
  } else {
    res.status(405).json({ message: "Only POST requests allowed" });
  }
}
