import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("Collections");

  switch (req.method) {
    case "POST":
      const reqBod = JSON.parse(req.body);
      const id = reqBod.id;

      console.log(reqBod.collectionID)

      await db.collection("cards").deleteOne({ id: id });
      const updateColleciton = await db.collection("revisioncollections").updateOne(
        { key: Number(reqBod.collectionID) },
        { $inc: { amount: -1 } }
      );

      console.log(updateColleciton)


      res.json({ status: 200, data: "Card deleted" });
      break;
  }
}
