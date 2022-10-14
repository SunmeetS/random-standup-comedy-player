const addLinks = "INSERT INTO standupurls (date, url) VALUES ($1, $2)"
const getLinks = "SELECT * FROM standupurls"
const getLatestLinks = "SELECT * FROM standupurls ORDER BY date DESC LIMIT 40 "

module.exports = {
    addLinks,
    getLinks,
    getLatestLinks
}