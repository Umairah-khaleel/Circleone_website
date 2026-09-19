const express = require('express');
const cors = require('cors');
require('dotenv').config();

const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use Auth Routes
app.use('/api/auth', signupRoute);
app.use('/api/auth', loginRoute);

// Test Route
app.get('/', (req, res) => {
    res.send('Circle One Backend API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});