const fs = require("fs");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

const activities = require("./activities.json");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
        res.send("Data has been saved!");
    });
});

app.post("/update", function (req, res) {
    activities[0].activity = req.body.updatedActivity;
    res.send(activities);
});

app.post("/delete", function (req, res) {
    activities.splice(req.body.number, 1);
    res.send(activities);
});

app.listen(5001, function () {
    console.log("Server is running on port 5000");
});
