const ROLE = {
    ADMIN: "admin",
    BASIC: "basic",
};

const users = [
    {
        id: 1,
        name: "Hung",
        role: ROLE.ADMIN,
    },
    {
        id: 2,
        name: "David",
        role: ROLE.BASIC,
    },
    {
        id: 3,
        name: "Tom",
        role: ROLE.BASIC,
    },
];

const projects = [
    {
        id: 1,
        name: "Hung's Project",
        userId: 1,
    },
    {
        id: 2,
        name: "David's Project",
        userId: 2,
    },
    {
        id: 3,
        name: "Tom's Project",
        userId: 3,
    },
    {
        id: 4,
        name: "Hung's Project 2",
        userId: 1,
    },
];
module.exports = {
    ROLE,
    users,
    projects,
};
