const express = require("express");

const app = express();

app.get("/", (req,res) => res.send("Respond Successful"));

app.use(express.urlencoded({extended: true}));

app.get("/island-breeze", (req,res) => {
    res.sendFile('/laragon/www/audio_download/src/mp3/Island Breeze.mp3');
});

app.get("/ineedmyrhimes", (req,res) => {
    res.sendFile('/laragon/www/audio_download/src/mp3/I Need My Rhimes.mp3');
});

app.get("/crimson-kiss", (req,res) => {
    res.sendFile('/laragon/www/audio_download/src/mp3/Crimson Kiss.mp3');
});

app.listen(3000, () => console.log("Server running on port 3000"));