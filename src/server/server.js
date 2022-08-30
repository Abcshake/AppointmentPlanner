const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req,res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

