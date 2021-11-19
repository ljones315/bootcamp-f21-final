import mongo from "../../../server/mongodb/mongo";

export default async function handler(req, res) {
  const db = await mongo();
  const applications = db.collection("application");
  if (req.method === "GET") {
    let params = req.query;

    let name = params.name;
    console.log(name);
    console.log(params);

    const findOptions = { "name" : name };

    const application = await applications.find(findOptions).toArray();

    console.log(application);

    res.status(200).json(application);
  } else if (req.method === "POST") {
    // const data = req.body;
    console.log(req.body);

    applications.insertOne(req.query);
    res.send(req.query);
    res.status(200);
  }
}
