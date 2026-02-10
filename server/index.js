const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
// Using local MongoDB by default if env not set
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ajce_website';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('AJCE Backend API is running');
});

// Import Models (to ensure they are registered)
// require('./models/Course');
// require('./models/Department');

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
