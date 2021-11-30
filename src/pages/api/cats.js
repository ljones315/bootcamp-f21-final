import mongo from "../../../server/mongodb/mongo";

export default async function handler(req, res) {
  const db = await mongo();
  const cats = db.collection("cat");

  let name = req.query.name;
  let findOptions = {};
  if (name) {
    findOptions.name = name;
  }

  const cat = await cats.find(findOptions).toArray();

  res.status(200).json(cat);
}
