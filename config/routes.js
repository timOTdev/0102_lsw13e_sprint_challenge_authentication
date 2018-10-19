const axios = require("axios");
const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig.js");
const { authenticate, generateToken } = require("./middlewares");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

function register(req, res) {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  db("users")
    .insert(user)
    .then(ids => {
      const id = ids[0];
      const token = generateToken({ username: user.username });
      return res.status(201).json({ newUserId: id });
    })
    .catch(err => console.log(err));
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
