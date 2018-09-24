const router = require("express").Router();
const Routes = require("./articles");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;