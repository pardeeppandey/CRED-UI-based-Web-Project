const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/Routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/api', routes);

mongoose.connect('mongodb://localhost:27017/studentsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
