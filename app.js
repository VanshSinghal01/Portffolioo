const express = require("express");
const app = express();
const connect = require("./database");
const usermodel = require('./addressschema');
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    usermodel.find({})
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.error("Data can't get", err);
            return res.status(500).json({ message: "Internal Server Error" });
        });
});


app.post('/log-visitor', (req, res) => {
    const { address, visitorIp } = req.body;

    const newVisitor = new usermodel({
        Address: address,
        visitorIp: visitorIp
    });

    newVisitor.save()
        .then(() => {
            console.log("Visitor logged:", visitorIp);
            return res.status(200).json({ message: "Visitor logged successfully!" });
        })
        .catch((err) => {
            console.error("Error logging visitor:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        });
});


connect()
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
        console.log('Database is connected');
    })
    .catch(() => {
        console.log("Server is not running");
    });
