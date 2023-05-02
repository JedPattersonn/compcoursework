import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");
  switch (req.method) {
    case "GET":
      const allPosts = await db.collection("revisioncollections").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
