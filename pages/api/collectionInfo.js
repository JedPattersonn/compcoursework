import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("revisioncollections").insertOne(bodyObject);
      res.json({ status: 200, data: "Successfully added to database"});
      break;
    case "GET":
      const allPosts = await db.collection("revisioncollections").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
