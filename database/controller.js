
const queries = require("./query")
const { pool } = require("./db")
let { getStandupLinks } = require("../seleniumTest")
let cron = require("node-cron")


// console.log(()=>getStandupLinks())

const addLinks = async (req, res) => {
    let links = await getStandupLinks()
    links.forEach(({date, url})=>{
        console.log(url)
        pool.query(queries.addLinks, [date, url], (error, result) => {
            if(error) res.send(error.message);
        })
    })
    res.send("Links Added Succesfully")

    // pool.query(queries.addLinks, )
}

// getStandupLinks().then((res) => {
//     console.log(res)
// })

// getStandupLinks()

const getLatestLinks = async (req, res) => {

    pool.query(queries.getLatestLinks, async (error, result) => {
        if (error) res.send(error.message);
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.status(200).json(result.rows)
        }
        // console.log("links: ", links)
    })
}

module.exports = {
    addLinks,
    getLatestLinks
}