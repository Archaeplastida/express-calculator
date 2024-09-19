const express = require("express");
const Statistic = require("./helpers")

const app = express();

app.get("/mean", (req,res) => {
    const {nums=null} = req.query;
    console.log(req.query);
    console.log(nums);
    return res.send("mean");
})

app.get("/median", (req,res) => {
    return res.send("median");
})

app.get("/mode", (req,res) => {
    return res.send("mode");
})

app.listen(3000, function(){
    console.log("App on port 3000.")
})