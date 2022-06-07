const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 3000;

const bodyParser = require("body-parser");
const multer = require("multer");
const form_data = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form_data.array());
app.use(express.json());

app.set("view engine", "pug");
// app.set('views', '바꿀폴더명');


app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get("/", function (req, res) {
    return res.send("hello worlds");
});


// req.params
app.get("/api/members/:id", (req, res) => {
    console.log(req.path);
    return res.send("memberId: " + req.params.id);
});


// req.query
app.get("/api/members", (req, res) => {
    const {name,age} = req.query;

    if (name != null && age != null)
        return res.send("name = " + name + ", age = " + age);
});

app.get("/login", function (req, res) {
    return res.render("login");
});

app.post("/api/members", (req, res) => {
    const {name, age} = req.body;
    if (name != null && age != null) {
        return res.json({id: 1, city: "대구"});
    }   
});


app.post("/login", function (req, res) {
    const {name, age} = req.body;
    if (name != null && age != null) {
        return res.send("name : " + name + ", age : " + age);
    } else {
        res.status(400).send("bad request");
    }
});