// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugRoutes'); // make sure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment variable for MongoDB URI
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bugtracker';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Routes
app.use('/api/bugs', bugRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('🚀 Backend is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
