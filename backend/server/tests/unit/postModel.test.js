// postModel.test.js - Unit tests for Post model
const mongoose = require('mongoose');
const Post = require('../../src/models/Post');

describe('Post Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/test-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create and save a post successfully', async () => {
    const validPost = new Post({
      title: 'Unit Test Post',
      content: 'This is a unit test content',
      author: mongoose.Types.ObjectId(),
      category: mongoose.Types.ObjectId(),
      slug: 'unit-test-post',
    });

    const savedPost = await validPost.save();

    expect(savedPost._id).toBeDefined();
    expect(savedPost.title).toBe('Unit Test Post');
    expect(savedPost.content).toBe('This is a unit test content');
  });

  it('should fail without required fields', async () => {
    const invalidPost = new Post({}); // missing required fields
    let err;
    try {
      await invalidPost.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});
