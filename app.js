const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');

const appointmentRoutes = require('./Routes/appointment')

const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'entry.html'));
});

app.use(appointmentRoutes);

app.listen(3000);

