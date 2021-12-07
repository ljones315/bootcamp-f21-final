import mongo from "../../../server/mongodb/mongo";

export default async function handler(req, res) {
  const db = await mongo();
  const applications = db.collection("application");
  if (req.method === "GET") {
    let params = req.query;

    let name = params.name;
    
    let findOptions = {};
    
    if (name) {
       findOptions.name = name ;
    }

    const application = await applications.find(findOptions).toArray();

    

    res.status(200).json(application);
  } else if (req.method === "POST") {
    // const data = req.body;
    console.log(req.query);

    applications.insertOne(JSON.parse(req.body));
    res.send(req.body)
    res.status(200);
  }
}
