const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/api/contacts', (req,res) => {
    const contacts = [
        {name: 'John Doe', phone: 4584624623, email: 'john.doe@gmail.com'}
    ];
    res.json(contacts);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));