import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");

  if (req.method === "POST") {
    let bodyObject = JSON.parse(req.body);

    if (
      !(
        "id" in bodyObject &&
        "key" in bodyObject &&
        "term" in bodyObject &&
        "definition" in bodyObject &&
        "correctCount" in bodyObject &&
        "incorrectCount" in bodyObject
      )
    ) {
      res.status(400).json({ error: "Request body is missing required fields" });
      return;
    }

    let collectionKey = bodyObject.key;

    await db.collection("cards").insertOne(bodyObject);


    await db.collection("revisioncollections").updateOne(
      { key: Number(collectionKey) },
      { $inc: { amount: +1 } }
    );

    res.json({ status: 200, data: "Successfully added to database" });
  } else {
    res.status(405).json({ error: "Only POST requests allowed" });
  }
}
