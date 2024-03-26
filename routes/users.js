const express = require("express");
const { createUser, getUsers } = require("../controllers/users");
const router = express.Router();

router.post("/", createUser).get("/", getUsers);

module.exports = router;