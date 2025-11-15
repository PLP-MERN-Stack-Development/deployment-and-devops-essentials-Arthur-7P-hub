const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // make sure server.js is in backend root
const Bug = require('../models/Bug');

beforeAll(async () => {
  const mongoUrl = 'mongodb://127.0.0.1:27017/bugtracker_test';
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Bug API', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({
        title: 'Test Bug',
        description: 'This is a test bug',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
