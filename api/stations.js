import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI;
const client = new MongoClient(MONGO_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("ocm"); // database ismi
    const collection = db.collection("geojson"); // collection adı
    const stations = await collection.find({}).toArray();
    res.status(200).json(stations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "MongoDB verisi çekilemedi" });
  }
}
