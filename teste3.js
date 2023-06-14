var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const userIndex = data.findIndex(
    (u) => u.name.toLowerCase() === name.toLowerCase()
  );
  if (userIndex < 0) {
    return res.status(400).json({
      message: "User not found. Check the name given and try again",
    });
  }
  data.splice(userIndex, 1);

  res.send("success");
};
