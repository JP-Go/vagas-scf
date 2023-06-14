var data = require("./fakeData");
var accessController = require("./accessControl");

const getUser = (req, res, next) => {
  let name = req.query.name;

  const maybeUser = data.find((u) =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );

  if (!maybeUser) return res.status(404).json({ message: "not found" });

  accessController.registerVisitToUserProfile(maybeUser.name);
  return res.status(200).json({ user: maybeUser });
};

const getUsers = (req, res, next) => {
  // Register a visit for each user since all of them are read here
  data.forEach((user) => {
    accessController.registerVisitToUserProfile(user.name);
  });
  res.status(200).json({ users: data });
};

module.exports = {
  getUser,
  getUsers,
};
