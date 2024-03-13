const express = require("express");
const personsRouter = express.Router();
const data = require("../models/data.json");

personsRouter.get("/", (req, res) => {
    res.send("Wellcome to the App !")
})

personsRouter.get("/persons", (req, res) => {
    res.send(data);
});

// POST Method

personsRouter.post("/persons", (req, res) => {
    console.log({reqBody:req.body});
    const idPerson = data.length +1;
    const { name } = req.body;
    data.push({id:idPerson, name})
    res.status(201).json({
        person: {id:idPerson, name:name},
        data: data
    })
})

module.exports = personsRouter;
