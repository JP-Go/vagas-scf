var data = require("./fakeData");

const getUser = (req, res, next) => {

  let name = req.query.name;

  const maybeUser = data.find(u => 
    u.name.toLowerCase().includes(name.toLowerCase()))

  if (!maybeUser)
    return res.status(404).json({ message: "not found" })

  return res.status(200).json({ user: maybeUser })

};

const getUsers = (req, res, next) => {

  res.status(200).json({ users: data });

};

module.exports = {
  getUser,
  getUsers
};