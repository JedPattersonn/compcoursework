import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");

  switch (req.method) {
    case "POST":
      const { id, term, definition } = req.body;
      // Update the card in the "cards" collection
      const result = await db.collection("cards").updateOne(
        { id: parseInt(id) },
        {
          $set: {
            term: term,
            definition: definition,
          },
        }
      );

      if (result.modifiedCount === 1) {
        res.json({ status: 200, data: "Card updated" });
      } else {
        res.status(400).json({ status: 400, error: "Failed to update card" });
      }
      break;

    default:
      res.status(405).json({ status: 405, error: "Method Not Allowed" });
  }
}
