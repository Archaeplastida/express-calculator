const express = require("express"), Statistic = require("./helpers"), app = express();

let theErrorValue;

const createResponse = (operation, value) => {
    const anArr = [];
    value.split(",").forEach(num => anArr.push(Number(num)));
    for (let num of value.split(",")) {
        if (isNaN(Number(num))) {
            theErrorValue = num;
            throw new Error
        }
    }
    return { response: { operation, "value": Statistic[operation](anArr) } }
}

for (let operation of ["mean", "median", "mode"]) app.get(`/${operation}`, (req, res) => res.json(createResponse(operation, req.query["nums"])));

app.use((error, req, res, next) => {
    res.status(400);
    if (req.query["nums"]) return res.json({ response: `${theErrorValue} is not a number.` });
    else return res.send("Incorrect query - nums are required.");
})

app.listen(3000, () => console.log("App on port 3000."));