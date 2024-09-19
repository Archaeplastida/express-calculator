const express = require("express");
const Statistic = require("./helpers")

const app = express();

const createResponse = (operation, value) => {
    const anArr = [];
    value.split(",").forEach(num => anArr.push(Number(num)));
    return { response: { operation, "value": Statistic[operation](anArr) } }
}

app.get("/mean", (req, res) => res.json(createResponse("mean", req.query["nums"])))

app.get("/median", (req, res) => res.json(createResponse("median", req.query["nums"])))

app.get("/mode", (req, res) => res.json(createResponse("mode", req.query["nums"])))

app.listen(3000, () => console.log("App on port 3000."))