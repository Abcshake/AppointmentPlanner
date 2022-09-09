const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db/index');

app.use(cors({ origin: 'http://localhost:3000'}));
app.get('/api/contacts', (request,response,next) => {
    pool.query('SELECT * FROM contacts', (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
    });
});

app.use((err,req,res,next) => {
    res.json(err);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));