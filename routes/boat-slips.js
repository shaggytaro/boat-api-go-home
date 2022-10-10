import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let boatSlips = [];

// all routes here start with /boat-slips
router.get('/', (req, res) => {
    res.status(200).send(boatSlips);
});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');

    const vessel = req.body;

    boatSlips.push({...vessel, slipNumber: uuidv4()});

    res.send(`Boat Slip is added`);

    if(boatSlips.vacant === true) {
        res.status(200).send(boatSlips.slipNumber);
    } else {
        res.status(409).send({
            "statusCode": 409,
            "message": "There are no available boat slips."
        });
    }

});

router.get('/:slip-number', (req,res) => {
    const { slipNumber } = req.params;

    const foundBoatSlip = boatSlips.find(boatSlip => boatSlip.slipNumber === slipNumber);

    res.send(foundBoatSlip);
});

router.delete('/:slip-number', (req, res) => {
    const { slipNumber } = req.params;

    boatSlips = boatSlips.filter(boatSlip => boatSlip.slipNumber !== slipNumber);

    res.send(`User with id ${slipNumber} deleted.`);
});

router.put('/:slip-number/vacate', (req, res) => {
    if(boatSlips.vacant === false) {
        res.status(204).send("");
    } else {
        res.status(409).send({
            "statusCode": 409,
            message: `Boat slip ${boatSlips.slipNumber} is currently vacant.`
        });
    }
});

export default router;