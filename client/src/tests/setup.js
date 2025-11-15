// setup.js
jest.setTimeout(10000);

beforeAll(() => {
  console.log('🧩 Starting backend test suite...');
});

afterAll(() => {
  console.log('✅ Backend test suite completed.');
});
