require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const app = express();
const massive = require('massive');

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })
    .catch(err => console.log(err));

app.use(json());

const ctrl = require('./controller')

app.get('/api/products', ctrl.getProducts);
app.post('/api/products', ctrl.addProduct);
app.delete('/api/products/:id', ctrl.deleteProduct);
app.put('/api/products/:id', ctrl.editProduct);

const port = process.env.port || 3001;
app.listen(port, () => 'Listening on port')