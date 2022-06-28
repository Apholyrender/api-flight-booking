const { json } = require("express");
let Flights = require("../models/Flight")
const getRandom = () => {
    return Math.floor(Math.random() * (100 - 1) + 1 )
  };
  
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
};

exports.allFlight = (req,res) => {
    res.json(Flights.exampleModel)
};

exports.addFlight = (req, res) => {
    const body = req.body
    const newFlight = {
        id : getRandom(),
        title: body.title,
        time : body.time,
        price: body.price,
        date: new Date 

    };
    Flights.exampleModel = Flights.exampleModel.concat(newFlight);
    res.json(Flights.exampleModel);
};

exports.getOneFlight = (req, res) => {
    const id = Number(req.params.id);
    const flight =  Flights.exampleModel.filter(flight => flight.id === id );
    if (flight) {
        res.json(flight)
    }
    else {
        res.status(404).end()
    }
};

exports.deleteOneFlight = (req, res) => {
const id = Number(req.params.id);
Flights.exampleModel = Flights.exampleModel.filter(flight => flight.id !== id);
res.json(Flights.exampleModel)
};

exports.editOneFlight = (req, res) => {
const id = Number(req.params.id);
let flight = Flights.exampleModel.filter(flight => flight.id === id);
const {fid, title, time,price, date} = req.body
if (flight) {
    let updated = {
        title,
        time,
        price
    };

    let targeIndex = Flights.exampleModel.indexOf(flight)
    Flights.exampleModel.splice(targeIndex,1,updated);
    res.status(204).end()
}
else {
    res.status(404).end()
}
}
