var data = require("./fakeData");
const accessController = require("./accessControl");
const { validateStringField } = require("./validators");
const { toTitleCase } = require("./utils");

module.exports = function (req, res) {
  var { name } = req.query;
  if (!validateStringField(name)) {
    res.status(400).json({
      message: "User not found",
    });
  }
  const numOfVisits = accessController.getVisitsByUserName(name);

  res.send(`Usuário ${toTitleCase(name)} foi lido ${numOfVisits} vezes."`);
};
