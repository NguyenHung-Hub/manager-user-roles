const { projects } = require("../data");
const { authUser } = require("../middleware/basicAuth");
const {
    setProject,
    authDeleteProject,
    authGetProject,
} = require("../middleware/project.middleware");
const { scopedProjects } = require("../permission/project");

const router = require("express").Router();

router.get("/", authUser, (req, res, next) => {
    res.status(200).json(scopedProjects(req.user, projects));
});

router.get(
    "/:projectId",
    setProject,
    authUser,
    authGetProject,
    (req, res, next) => {
        res.status(200).json(req.project);
    }
);

router.delete(
    "/:projectId",
    setProject,
    authUser,
    authDeleteProject,
    (req, res, next) => {
        res.send("Delete project");
    }
);

module.exports = router;
