import mongo from "../../../server/mongodb/mongo";

export default async function handler(req, res) {
  const db = await mongo();
  const cats = db.collection("cat");

  const cat = await cats.find().toArray();

  console.log("cat: " + cat.name);

  res.status(200).json(cat);
}
