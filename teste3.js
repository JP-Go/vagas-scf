var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const maybeUser = data.find(
    (u) => u.name.toLowerCase() === name.toLowerCase()
  );
  if (!maybeUser)
    res.status(400).json({
      message: "User was not found",
    });
  data = data.filter((u) => u === maybeUser);

  res.send("success");
};
