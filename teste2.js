var data = require("./fakeData");
const { validateUserData } = require("./validators");

module.exports = function (req, res) {
  const [errors, validatedUserData] = validateUserData(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      message: "There were errors with your request",
      errors,
    });
  }

  // truque para aplicar a função max em um array
  let lastId = Math.max.apply(
    null,
    data.map((u) => u.id)
  );

  const { name, job } = validatedUserData;

  const newUser = {
    id: ++lastId,
    name,
    job,
  };
  data.push(newUser);

  res.send(newUser);
};
