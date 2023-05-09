const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Rajib Rahman",
    title: "Poor JavaScript programmer",
    age: 21,
    weight: "250 gram",
    email: "rajibrahman74@gmawil.com",
  },
  {
    id: 2,
    name: "Rajib Rahman jri",
    title: "Poor JavaScript programmers ululul",
    age: 23,
    weight: "50 gram",
    email: "ululul@ulul.com",
  },
];

app.get("/", (req, res) => {
  res.send("User server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("Post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser)
  res.send(newUser)

});

app.listen(port, () => {
  console.log(`server is running  on PORTR: ${port}`);
});
