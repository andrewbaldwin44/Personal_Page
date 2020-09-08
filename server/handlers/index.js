const { MongoClient } = require("mongodb");
const assert = require('assert');

require("dotenv").config();
const { MONGO_URI } = process.env;

const {
  getQueryValue,
} = require('../utils/index');

const {
  PAGINATION_DEFAULTS: {
    page: pageDefault,
    limit: limitDefault,
  }
} = require('../constants');

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

async function getTestimonials(req, res) {
  const page = getQueryValue(req.query.page, pageDefault);
  const limit = getQueryValue(req.query.limit, limitDefault);

  const startIndex = limit * (page - 1);

  try {
    const client = await MongoClient(MONGO_URI, { useUnifiedTopology: true });

    await client.connect();

    const database = client.db('personal_portfolio');

    const testimonials = await database.collection('testimonials')
                                       .find()
                                       .sort({ timestamp: 1 })
                                       .skip(startIndex)
                                       .limit(limit)
                                       .toArray();

    const testimonialsAmount =  await database.collection('testimonials').countDocuments();

    res.status(200).json({ status: 200, testimonials, testimonialsAmount });
  }
  catch ({ message }) {
    res.status(404).json({ status: 404, message });
  }
}

module.exports = {
  getProjects,
  getTestimonials,
};
