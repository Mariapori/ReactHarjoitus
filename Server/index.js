const express = require("express");  
const cors = require("cors");

var app = express();
app.use(cors())
app.use(express.json());

app.listen(3001, () => {
    console.log("Palvelin pyörii portissa: 3001");
});

app.post("/api/create", (req,res) => {
    console.log(req.body);
    const nimi = req.body.nimi;
    res.send("Vastaanotettu: " + nimi);
});