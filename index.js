require('dotenv').config();

const express = require('express');
const cors = require('cors');
const setupDb = require('./setupDb');
const {Sequelize}  = require('sequelize');
const app = express();
const port = process.env.PORT || 3000;



const User = require('./models/user');



app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));
app.use(express.json());

// app.get('/', (req, res) => {
//     const sqlQuery = 'CREATE TABLE IF NOT EXISTS users(id int NOT NULL, username varchar(255) NOT NULL, email varchar(255), PRIMARY KEY (id))';
//     console.log(req);
//     db.query(sqlQuery, err => {
//         if (err) throw err;
        
//         res.send('Table user created!')
//     })


// });

// app.post('/createUser', async (req, res) => {
//     const { username, email } = req.body;
//     const user = await User.create({username, email})

//     res.send(user);
// })

setupDb(app, port);
// const server = app.listen(port, () => console.log(`Starting at port ${port}`));