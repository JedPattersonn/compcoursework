import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");
  switch (req.method) {
    case "POST":
      let bodyObject = req.body;
      const allPosts = await db.collection("cards").find(bodyObject).toArray();
      res.json(allPosts);
      break;
  }
}
