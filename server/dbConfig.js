import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://dbuser:admin@cluster0.no9iv95.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});