import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");
  switch (req.method) {
    case "POST":
        let bodyObject = JSON.parse(req.body);
        console.log("Body", bodyObject)
      const allPosts = await db.collection("revisioncollections").find(bodyObject).toArray();
      console.log(allPosts)
      res.json(allPosts);
      break;
  }
}
