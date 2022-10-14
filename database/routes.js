const {Router} = require("express");
const { addLinks, getLatestLinks } = require("./controller")

const router = Router();

router.post("/addLinks", addLinks);
router.get("/getLatestLinks", getLatestLinks);

module.exports = router