const { projects } = require("../data");
const { canDeleteProject, canViewProject } = require("../permission/project");

function setProject(req, res, next) {
    const projectId = parseInt(req.params.projectId);

    if (projectId) {
        req.project = projects.find((pro) => pro.id === projectId);
    }

    if (req.project == null) {
        res.status(404);
        return res.send("Project not found");
    }

    next();
}

function authGetProject(req, res, next) {
    if (!canViewProject(req.user, req.project)) {
        return res.status(403).send("Not allowed");
    }

    next();
}

function authDeleteProject(req, res, next) {
    if (!canDeleteProject(req.user, req.project)) {
        return res.status(403).send("Not allowed");
    }

    next();
}

module.exports = { setProject, authGetProject, authDeleteProject };
