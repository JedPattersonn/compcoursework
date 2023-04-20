import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("cards").insertOne(bodyObject);
      const allPosts = await db
        .collection("cards")
        .find({ key: `${bodyObject.key}` })
        .toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
