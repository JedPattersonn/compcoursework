import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");

  switch (req.method) {
    case "POST":
      const reqBod = JSON.parse(req.body);
      const id = reqBod.id;

      await db.collection("revisioncollections").deleteOne({ id: id });

      res.json({ status: 200, data: "Card deleted" });
      break;
  }
}
