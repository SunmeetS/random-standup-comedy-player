let Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    host: "random-standup-comedy.netlify.app",
    database: "standupurls",
    password: "sunmeet",
    port: 5432
})

module.exports = {
    pool
}