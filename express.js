let express = require ("express");
let routes = require("./database/routes")
let cron = require("node-cron")
const cors = require('cors');
const { default: axios } = require("axios");

const corsOption = {
    origin: '*'
};

cron.schedule("0 1 * * 1", function() {
    axios.post("http://localhost:3001/addLinks")
});

let app = express();

app.listen(3001, ()=>{
    console.log("Server listening on Port 3001");
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use(express.json());
app.use(routes);
app.use(cors(corsOption));
//if you want in every domain then
app.use(cors())