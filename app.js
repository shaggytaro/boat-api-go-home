import express from 'express';
import bodyParser from 'body-parser';
import boatSlipsRoutes from './routes/boat-slips.js';

const app = express();
const PORT = process.env.PORT || 8080 || 3000;

app.use(bodyParser.json());

app.use('/boat-slips', boatSlipsRoutes);

app.get('/', (req, res) => res.send('Hello')); // a dummy get route

app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));









// app.use(express.json());

// const apiData = require('../data.json');

// // public static path

// const static_path = path.join(__dirname, "../public");

// app.use(express.static(static_path));


// // routing
// app.get('', (req, res) => {
//     res.send('Hello I am live');
// });

// app.get('/boat-slips', (req, res) => {
//     res.send(apiData);
// })

// app.post('/boat-slips', (req,res) => {
//     const boat = {
//         // slipNumber: boat.length + 1, 
//         name: req.body.name
//     };
//     apiData.push(boat);
//     res.send(boat);

// });



