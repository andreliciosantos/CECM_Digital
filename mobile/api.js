const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let mobileData = [];

// Get all mobile data
app.get('/api/mobiles', (req, res) => {
    res.json(mobileData);
});

// Add new mobile data
app.post('/api/mobiles', (req, res) => {
    const newMobile = req.body;
    mobileData.push(newMobile);
    res.status(201).json(newMobile);
});

// Update existing mobile data
app.put('/api/mobiles/:id', (req, res) => {
    const mobileId = req.params.id;
    const updatedMobile = req.body;
    const index = mobileData.findIndex(mobile => mobile.id === mobileId);
    
    if (index !== -1) {
        mobileData[index] = updatedMobile;
        res.json(updatedMobile);
    } else {
        res.status(404).json({ message: 'Mobile not found' });
    }
});

// Delete mobile data
app.delete('/api/mobiles/:id', (req, res) => {
    const mobileId = req.params.id;
    mobileData = mobileData.filter(mobile => mobile.id !== mobileId);
    res.status(204).end();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
