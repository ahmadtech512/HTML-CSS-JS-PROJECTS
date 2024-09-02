const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sample data storage (can be replaced with a database)
let menuItems = {
  pizza: [],
  burger: [],
  pasta: [],
  steak: [],
  appetizers: [],
  chicken: [],
  sandwich: []
};

// API endpoint to add an item
app.post('/add-item', (req, res) => {
  const { section, item } = req.body;
  if (section && item) {
    menuItems[section].push(item);
    res.status(200).json({ message: 'Item added successfully' });
  } else {
    res.status(400).json({ error: 'Missing section or item data' });
  }
});

// Endpoint to get menu items
app.get('/menu-items', (req, res) => {
  res.status(200).json(menuItems);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
