const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000'}));
app.get('/api/contacts', (request,response,next) => {
    pool.query('SELECT * FROM contacts', (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
    });
});
app.get('/api/appointments', (request,response,next) => {
    pool.query('SELECT * FROM appointments', (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
    });
});

app.post('/api/contacts', (request, response, next) => {
    const { name, email, phone } = request.body;
    
    pool.query(
        'INSERT INTO contacts(name, phone, email) VALUES($1, $2, $3)',
        [name,phone,email],
            (err, res) => {
                if (err) return next(err);
                response.redirect('/api/contacts');
            }
    );
});

app.post('/api/appointments', (request, response, next) => {
    const { title, date, time, contact } = request.body;
    
    pool.query(
        'INSERT INTO appointments(title, date, time, contact) VALUES($1, $2, $3, $4)',
        [title,date,time,contact],
            (err, res) => {
                if (err) return next(err);
                response.redirect('/api/appointments');
            }
    );
});

app.use((err,req,res,next) => {
    res.json(err);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));