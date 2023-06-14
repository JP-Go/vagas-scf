const accessController = require("./accessControl");
var data = require("./fakeData");
const { validateStringField } = require("./validators");

module.exports = function (req, res) {
  var { name } = req.query;
  if (!validateStringField(name)) {
    res.status(400).json({
      message: "User not found",
    });
  }
  const numOfVisits = accessController.getVisitsByUserName(name);

  res.send(`Usuário ${name} foi lido ${numOfVisits} vezes."`);
};
