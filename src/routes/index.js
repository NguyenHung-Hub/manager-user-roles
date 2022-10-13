const { authUser, authRole } = require("../middleware/basicAuth");
const { ROLE } = require("../data");
const projectRoute = require("./project.route");

function route(app) {
    app.get("/", (req, res, next) => {
        res.send("Home page");
    });
    app.get("/dashboard", authUser, (req, res, next) => {
        res.send("Dashboard page");
    });
    app.get("/admin", authUser, authRole(ROLE.ADMIN), (req, res, next) => {
        res.send("Admin page");
    });

    app.use("/projects", projectRoute);
}

module.exports = route;
