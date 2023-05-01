// Import the express module at the top of the file:
const express = require('express')
// Create a new instance of the Express app:
const app = express()

// Define a route for the homepage ('/') using the app.get() method:
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
