const express = require("express");
const path = require("path");
const app = express();

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    

}