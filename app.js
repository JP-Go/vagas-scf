var express = require("express");
var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");

var auth = require("./auth");
var { autorizationMiddleware } = require("./middlewares");
var app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2);
app.delete("/users", autorizationMiddleware, teste3);
app.put("/users", autorizationMiddleware, teste4);
app.get("/users/access", teste5);
app.post("/auth", auth.registerNewAuthToken);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
