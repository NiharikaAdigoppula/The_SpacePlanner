const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3002;

// Set the view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Make sure to adjust this path

// Serve static files
app.use(express.static(path.join(__dirname, 'assests'))); // Adjust if necessary

// Define your routes
app.get('/index', (req, res) => {
    res.render('index'); // Ensure this matches your Pug file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
