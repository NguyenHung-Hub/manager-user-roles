const express = require("express");
const { users } = require("./src/data");
const setUser = require("./src/middleware/setUser");
const route = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(setUser);

route(app);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});
