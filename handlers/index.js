const { MongoClient } = require("mongodb");
const assert = require('assert');

require("dotenv").config();
const { MONGO_URI } = process.env;

async function getProjects(req, res) {
  try {
    const client = await MongoClient(MONGO_URI, { useUnifiedTopology: true });

    await client.connect();

    const database = client.db('personal_portfolio');

    const projects = await database.collection('projects')
                                   .find()
                                   .sort({ rank: 1 })
                                   .toArray();

    res.status(200).json({ status: 200, projects });
  }
  catch ({ message }) {
    res.status(404).json({ status: 404, message });
  }
}

module.exports = {
  getProjects,
};
