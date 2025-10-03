const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Eye Tracking Backend Running');
});

// Define API endpoints as needed for saving gaze info (optional)
// e.g., app.post('/save-gaze', (req, res) => {...})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
